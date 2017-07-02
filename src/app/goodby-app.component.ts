import { ContainerizedVue, VueClass } from 'src/lib/containerized-vue';
import { Component } from 'vue-property-decorator';
import { injectable } from 'inversify';
import { containerTypes } from 'src/app/app.types';
import * as Template from './app.component.html?style=./app.component.scss';

@Template
@Component
@injectable()
export class GoodbyAppComponent extends ContainerizedVue {
  public message = 'Goodby Vue.js!';

  public beforeCreate() {
    if (!this.$options.components) {
      this.$options.components = {};
    }

    this.$options.components['additional-info']
      = this.$container.get<VueClass>(containerTypes.AdditionalInfoComponent);
  }

  public test() {
    console.log('test');
  }
}
