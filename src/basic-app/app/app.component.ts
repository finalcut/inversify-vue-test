import Vue from 'vue';
import Component from 'vue-class-component';
import template from 'src/basic-app/app/app.component.vue';
import { injectable } from '../di';

@Component({
  ...template
})
@injectable()
export class AppComponent extends Vue {
  public message = 'Hello Vue.js!';

  // public created() {
  //   if (!this.$options.components) {
  //     this.$options.components = {};
  //   }
  //
  //   this.$options.components['additional-info']
  //     = this.container.get<VueClass>(this.registry.AdditionalInfoComponent);
  // }

  public test() {
    console.log('test');
  }
}
