import { Vue, VueClass, Component, Container, injectable } from 'src/lib/vue.interface';
import { registry } from 'src/basic-app/registry';
import { GoodbyAppComponent } from 'src/basic-app/goodby-app/goodby-app.component';

@Component({
  template: '<div></div>'
})
@injectable()
export class MockEmptyComponent extends Vue {
}

describe('GoodbyAppComponent', () => {
  let mountPoint: HTMLElement;
  let container: Container;
  let app: Vue;
  let component: GoodbyAppComponent;

  // Setup the IoC container
  beforeEach(() => {
    container = new Container();
    container.bind<VueClass>(registry.AppComponent).toConstructor(GoodbyAppComponent);
    container.bind<VueClass>(registry.AdditionalInfoComponent).toConstructor(MockEmptyComponent);
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
    component = app.$children[0] as GoodbyAppComponent;
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
