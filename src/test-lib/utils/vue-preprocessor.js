const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const vueCompiler = require('vue-template-compiler')

const importRegex = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?([^"'\(\)\n;]+)\s*from\s*['"](\S*?)['"]);?)/g;

// Microsoft's ts.findConfigFilepath does not work under Windows (hard coded '/' as directory separator)
// https://github.com/Microsoft/TypeScript/pull/9625 probably fixes this but is open since July 11th
function findTsConfigFile(filePath) {
  let prev = null;
  do {
    const testPath = path.join(filePath, 'tsconfig.json');
    if (fs.existsSync(testPath)) {
      return testPath;
    }
    prev = filePath;
    filePath = path.dirname(filePath);
  } while (prev !== filePath);
  return undefined;
}

function tsCompiler(src, filePath) {
  const tsConfigPath = findTsConfigFile(filePath);

  if (!tsConfigPath) {
    throw 'tsconfig.json not found for ' + filePath;
  }

  const tsOptions = require(tsConfigPath);
  const options = {
    compilerOptions: Object.assign(
      {},
      tsOptions.compilerOptions,
      {
        module: 'commonjs',
        inlineSourceMap: true,
        sourceMap: false
      }
    )
  };

  const res = ts.transpileModule(src, options);
  if (res.diagnostics.length > 0) {
    let err = ''
    res.diagnostics.forEach(diagnostic => {
      const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
      const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
      err += `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}\n`
    })
    throw err
  }
  return res.outputText
}

function toFunction (code) {
  const transpile = require('vue-template-es2015-compiler')
  return transpile('function render () {' + code + '}')
}

function tsPreCompiler(src, filename, config, options) {
  let templateImports = [];
  let matches;
  
  while((matches = importRegex.exec(src)) !== null) {
    if (matches.length >= 6 && matches[6] && matches[6].indexOf('html') > -1) {
      templateImports.push({
        importText: matches[2].trim(),
        importName: matches[5].trim(),
        importPath: matches[6].trim()
      });
    }
  }

  if (templateImports.length === 0) {
    return tsCompiler(src, filename);
  }

  let modifiedSrc = src;
  let vueSrc = '';

  templateImports.forEach(tImport => {
    let templatePath = path.resolve(
      path.dirname(filename),
      tImport.importPath.split('?').shift()
    );
    let hasStyle = tImport.importPath.split('?').pop().indexOf('style') > -1;
    let stylePath = hasStyle
      ? path.resolve(
        path.dirname(filename),
        tImport.importPath.split('?').pop().split('=').pop()
      )
      : '';

    try {
      vueSrc += `<template lang="html">\n${fs.readFileSync(templatePath).toString()}\n</template>`;
    } catch (error) {
      throw error;
    }

    // Remove the import line
    modifiedSrc = modifiedSrc.replace(tImport.importText, '');
    // Remove the decorator
    const decorator = `\@${tImport.importName}[\\(\\)]*`;
    const decoratorRegex = new RegExp(decorator, 'g');
    modifiedSrc = modifiedSrc.replace(decoratorRegex, '');
  });

  vueSrc += `\n<script>\n${tsCompiler(modifiedSrc, filename)}\n</script>`;
  // return vuePreprocessor.process(vueSrc, `${filename}.vue`, config, options);

  const parts = vueCompiler.parseComponent(vueSrc);
  const compiled = vueCompiler.compile(parts.template.content);
	const template = {
		render: toFunction(compiled.render),
		staticRenderFns: '[' + compiled.staticRenderFns.map(toFunction).join(',') + ']'
	}
  let output = '';
	output +=
			';(function(){\n' + parts.script.content + '\n})()\n';
  output += 'var __vue__module__ = Object.keys(module.exports)[0];'
	output += 'var __vue__options__ = (typeof module.exports[__vue__module__] === "function"' +
			'? module.exports[__vue__module__].options' +
			': module.exports[__vue__module__])\n'
	output +=
			'__vue__options__.render = ' + template.render + '\n' +
			'__vue__options__.staticRenderFns = ' + template.staticRenderFns + '\n';
	return output;
}

module.exports.process = function process(src, filename, config, options) {
  let output = src;
  output = tsPreCompiler(src, filename);
  return output;
};

module.exports.getCacheKey = function getCacheKey(fileData, filename, configString, {instrument}) {
  return crypto
    .createHash('md5')
    .update(fs.readFileSync(filename).toString())
    .update('\0', 'utf8')
    .update(fileData)
    .update('\0', 'utf8')
    .update(configString)
    .update('\0', 'utf8')
    .update(instrument ? 'instrument' : '')
    .digest('hex');
}
