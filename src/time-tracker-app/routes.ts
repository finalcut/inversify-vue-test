import { VueRouter } from 'src/lib/vue.barrel';
import { container } from 'src/time-tracker-app/container';
import { registry } from 'src/time-tracker-app/registry';

/* tslint:disable:no-require-imports no-unnecessary-type-assertion */
export const routes: VueRouter.RouteConfig[] = [
  {
    path: '/home',
    component: container.get(registry.HomeComponent)
  },
  {
    path: '/time-entries/:child?',
    component: () => import('./time-entries').then(module => module)
    //   async () => new Promise<Vue>(resolve => {
    //   require.ensure(
    //     [],
    //     async require => {
    //       const timeEntriesModule = await (require('./time-entries') as { module: Vue }).module;
    //       resolve(timeEntriesModule);
    //     },
    //     'time-tracker-app/time-entries'
    //   );
    // })
  },
  {
    path: '*',
    redirect: '/home'
  }
];
