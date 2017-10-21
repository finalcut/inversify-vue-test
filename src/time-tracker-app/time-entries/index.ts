import { Vue, VueRouter } from 'src/lib/vue.barrel';
import { container } from 'src/time-tracker-app/time-entries/container';
import { registry } from 'src/time-tracker-app/time-entries/registry';
import { routes } from 'src/time-tracker-app/time-entries/routes';

const router = new VueRouter({
  routes,
  base: '/time-entries'
});

export const module: Vue.ComponentOptions<Vue> = {
  router,
  render: r => r(container.get(registry.TimeEntriesComponent)),
  provide: () => ({
    container,
    registry
  })
};
