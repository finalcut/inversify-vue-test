import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import { TimeEntry } from 'src/time-tracker-app/time-entries/time-entries.interface';
import template from 'src/time-tracker-app/time-entries/time-entry/time-entry.component.vue';

@Component(template)
@injectable()
export class TimeEntryComponent extends Vue {
  public timeEntries: TimeEntry[];
}
