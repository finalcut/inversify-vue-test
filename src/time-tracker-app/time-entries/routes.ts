import { Vue, VueRouter, Container, Registry } from 'src/lib/vue.barrel';

/* tslint:disable:no-require-imports no-unnecessary-type-assertion */
export const routes: VueRouter.RouteConfig[] = [
  {
    path: '/time-entries',
    component: async () => new Promise<Vue>(resolve => {
      require.ensure(
        [],
        async require => {
          const container = await (require('./container') as { container: Container }).container;
          const registry = await (require('./registry') as { registry: Registry }).registry;
          resolve(container.get(registry.TimeEntryListComponent) as Vue);
        },
        'time-tracker-app/time-entries'
      );
    })
  },
  {
    path: '/time-entry',
    component: async () => new Promise<Vue>(resolve => {
      require.ensure(
        [],
        async require => {
          const container = await (require('./container') as { container: Container }).container;
          const registry = await (require('./registry') as { registry: Registry }).registry;
          resolve(container.get(registry.TimeEntryComponent) as Vue);
        },
        'time-tracker-app/time-entries'
      );
    })
  }
];
