import { Vue } from 'src/lib/vue.barrel';
import { container } from 'src/time-tracker-app/time-entries/container';
import { registry } from 'src/time-tracker-app/time-entries/registry';

/* tslint:disable:object-literal-shorthand no-invalid-this */
export const TimeEntriesModule: Vue.ComponentOptions<Vue> = {
  render: r => r('router-view'),
  provide: () => ({
    container,
    registry
  })
};
