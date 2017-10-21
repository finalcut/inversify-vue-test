import { VueRouter } from 'src/lib/vue.barrel';
import { registry } from 'src/time-tracker-app/time-entries/registry';
import { container } from 'src/time-tracker-app/time-entries/container';

/* tslint:disable:no-require-imports no-unnecessary-type-assertion */
export const routes: VueRouter.RouteConfig[] = [
  {
    path: '',
    component: container.get(registry.TimeEntryListComponent)
  },
  {
    path: 'time-entry',
    component: container.get(registry.TimeEntryComponent)
  }
];
