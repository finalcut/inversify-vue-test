import { Registry } from 'src/lib/vue.interface';

export const registry: Registry = {
  AppComponent: Symbol('AppComponent'),
  AdditionalInfoComponent: Symbol('AdditionalInfoComponent')
};
