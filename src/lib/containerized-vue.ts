import { Container } from 'inversify';
import Vue from 'vue';

export class ContainerizedVue extends Vue {
  public $container: Container;
}

export { VueClass } from 'vue-class-component/lib/declarations';
