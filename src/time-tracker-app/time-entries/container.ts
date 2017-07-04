import { VueClass, Container } from 'src/lib/vue.barrel';
import { registry } from 'src/time-tracker-app/time-entries/registry';

import { TimeEntryListComponent } from 'src/time-tracker-app/time-entries/time-entry-list/time-entry-list.component';
import { TimeEntryComponent } from 'src/time-tracker-app/time-entries/time-entry/time-entry.component';

const container = new Container();

// Bind component constructors
container
  .bind<VueClass>(registry.TimeEntryListComponent)
  .toConstructor(TimeEntryListComponent);
container
  .bind<VueClass>(registry.TimeEntryComponent)
  .toConstructor(TimeEntryComponent);

import { container as parentContainer } from 'src/time-tracker-app/container';
container.parent = parentContainer;

export { container };
