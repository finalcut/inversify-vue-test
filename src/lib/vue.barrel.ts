export { VueClass } from 'vue-class-component/lib/declarations';
export * from 'inversify';
export * from 'vue-property-decorator';

export interface Registry {
  [name: string]: symbol;
}

// import Vue from 'vue';
import VueRouter from 'vue-router';
export {
  // Vue,
  VueRouter
};
