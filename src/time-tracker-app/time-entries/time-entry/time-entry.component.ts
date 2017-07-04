import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import { TimeEntry } from 'src/time-tracker-app/time-entries/time-entries.interface';
import * as Template from './time-entry.component.html?style=./time-entry.component.scss';

@Template
@Component
@injectable()
export class TimeEntryComponent extends Vue {
  public timeEntries: TimeEntry[];

}
