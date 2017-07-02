import * as Vue from 'vue';

/**
 * When building a Vue app with Webpack, we must import Vue using
 * the syntax `import Vue from 'vue'` or the application will fail
 * to load in the browser. However, when running inside a Jest test,
 * the import fails to properly expose the default export. This mock
 * corrects that by overriding the import of vue to provide the correct
 * import value.
 */
jest.mock('vue', () => {
  return { default: Vue };
});
