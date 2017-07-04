import { VueRouter } from 'src/lib/vue.barrel';
import { container } from 'src/time-tracker-app/container';
import { registry } from 'src/time-tracker-app/registry';
import { routes as timeEntriesRoutes } from 'src/time-tracker-app/time-entries/routes';

export const routes: VueRouter.RouteConfig[] = [
  {
    path: '/home',
    component: container.get(registry.HomeComponent)
  },
  ...timeEntriesRoutes,
  // Redirect bad routes to home
  {
    path: '*',
    redirect: '/home'
  }
];
