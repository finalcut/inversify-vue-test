import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import template from 'src/time-tracker-app/time-entries/time-entries.component.vue';

@Component(template)
@injectable()
export class TimeEntriesComponent extends Vue {
}
