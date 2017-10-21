import Vue, { Component as VueComponent } from 'vue';
import Component from 'vue-class-component';
import { Container } from 'inversify';
import { registry, injectable } from '../di';
import { AppComponent } from 'src/basic-app/app/app.component';

@Component({
  template: '<div></div>'
})
@injectable()
export class MockEmptyComponent extends Vue {
}

describe('AppComponent', () => {
  let mountPoint: HTMLElement;
  let container: Container;
  let app: Vue;
  let component: AppComponent;

  // Setup the IoC container
  beforeEach(() => {
    container = new Container();
    container.bind<VueComponent>(registry.AppComponent).toConstructor(AppComponent);
    container.bind<VueComponent>(registry.AdditionalInfoComponent).toConstructor(MockEmptyComponent);
  });

  // Setup the Vue component
  beforeEach(() => {
    mountPoint = document.createElement('div');
    mountPoint.id = 'basic-app-main';
    app = new Vue({
      el: mountPoint,
      render: r => r(container.get(registry.AppComponent)),
      provide: () => ({
        container,
        registry
      })
    }).$mount();
    component = app.$children[0] as AppComponent;
  });

  it('should create the app', () => {
    expect(mountPoint).toBeDefined();
    expect(container).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should contain a h1 element', () => {
    const componentElement = window.extractComponentElement(component, component.$children);
    expect(componentElement.querySelector('h1')).toBeDefined();
    expect((componentElement.querySelector('h1') as HTMLElement).innerHTML.trim()).toBe('Vue Test');
    expect(componentElement.querySelector('h3')).toBeDefined();
    expect((componentElement.querySelector('h3') as HTMLElement).innerHTML.trim()).toBe(component.message);
  });

  it('should console log when executing test method', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementationOnce(() => { /* Do nothing */ });
    component.test();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    consoleSpy.mockClear();
  });
});
