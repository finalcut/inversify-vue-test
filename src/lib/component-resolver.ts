import { VueClass } from 'vue-class-component/lib/declarations';
export { VueClass } from 'vue-class-component/lib/declarations';

export function componentResolver<V extends VueClass>(componentConstructor: () => V) {
  return (resolve: (component: V) => void, reject: (error: Error) => void) => {
    try {
      resolve(componentConstructor());
    } catch (error) {
      reject(error as Error);
    }
  };
}
