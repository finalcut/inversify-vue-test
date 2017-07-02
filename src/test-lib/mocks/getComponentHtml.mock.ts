import * as Vue from 'vue';

export function extractComponentElement(component: Vue, children: Vue[]) {
  const outerHtml = component.$el.outerHTML;
  let childrenHtml = '';

  children.forEach(child => {
    childrenHtml += child.$el.outerHTML;
  });

  const newComponent = document.createElement('div');
  newComponent.innerHTML = outerHtml.replace(childrenHtml, '');
  return newComponent.children[0];
}

Object.defineProperty(window, 'extractComponentElement', {value: extractComponentElement});

/* tslint:disable:no-namespace prefer-method-signature */
declare global {
  export interface Window {
    extractComponentElement: (component: Vue, children: Vue[]) => Element;
  }
}
/* tslint:enable:no-namespace prefer-method-signature */
