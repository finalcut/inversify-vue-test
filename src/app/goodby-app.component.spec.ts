import Vue from 'vue';
import { Container, injectable } from 'inversify';
import { Component } from 'vue-property-decorator';
import { ContainerizedVue, VueClass } from 'src/lib/containerized-vue';
import { containerTypes } from 'src/app/app.types';
import { GoodbyAppComponent } from 'src/app/goodby-app.component';

@Component({
  template: '<div></div>'
})
@injectable()
export class MockEmptyComponent extends Vue {
}

describe('GoodbyAppComponent', () => {
  let container: Container;
  let component: GoodbyAppComponent;

  // Setup the IoC container
  beforeEach(() => {
    container = new Container();
    container.bind<VueClass>(containerTypes.AppComponent).toConstructor(GoodbyAppComponent);
    container.bind<VueClass>(containerTypes.AdditionalInfoComponent).toConstructor(MockEmptyComponent);
  });

  // Setup the Vue component
  beforeEach(() => {
    ContainerizedVue.prototype.$container = container;
    component = new ContainerizedVue(GoodbyAppComponent as Vue.ComponentOptions<Vue>).$mount() as GoodbyAppComponent;
  });

  it('should create the app', () => {
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
