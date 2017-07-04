import { Vue, VueRouter } from 'src/lib/vue.barrel';
import { container } from 'src/time-tracker-app/container';
import { registry } from 'src/time-tracker-app/registry';
import { routes } from 'src/time-tracker-app/routes';

Vue.use(VueRouter);
const router = new VueRouter();
router.addRoutes(routes);

router.app = new Vue({
  router,
  render: r => r(container.get(registry.AppComponent)),
  provide: () => ({
    container,
    registry
  })
}).$mount('#time-tracker-app-main');
