import { Registry } from 'src/lib/vue.barrel';
import { registry as parentRegistry } from 'src/time-tracker-app/registry';

export const registry: Registry = {
  ...parentRegistry,
  TimeEntriesComponent: Symbol('TimeEntriesComponent'),
  TimeEntryListComponent: Symbol('TimeEntryListComponent'),
  TimeEntryComponent: Symbol('TimeEntry')
};
