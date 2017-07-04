import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import { TimeEntry } from 'src/time-tracker-app/time-entries/time-entries.interface';
import * as Template from './time-entry-list.component.html?style=./time-entry-list.component.scss';

@Template
@Component
@injectable()
export class TimeEntryListComponent extends Vue {
  public timeEntries: TimeEntry[];

}
