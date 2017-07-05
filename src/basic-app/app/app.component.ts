import { Vue, VueClass, Component, Inject, Registry, Container, injectable } from 'src/lib/vue.barrel';
import template from 'src/basic-app/app/app.component.vue';

@Component(template)
@injectable()
export class AppComponent extends Vue {
  @Inject()
  public container: Container;
  @Inject()
  public registry: Registry;

  public message = 'Hello Vue.js!';

  public created() {
    if (!this.$options.components) {
      this.$options.components = {};
    }

    this.$options.components['additional-info']
      = this.container.get<VueClass>(this.registry.AdditionalInfoComponent);
  }

  public test() {
    console.log('test');
  }
}
