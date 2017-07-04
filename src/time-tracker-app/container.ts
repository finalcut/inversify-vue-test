import { VueClass, Container } from 'src/lib/vue.barrel';
import { registry } from 'src/time-tracker-app/registry';

import { AppComponent } from 'src/time-tracker-app/app/app.component';
import { HomeComponent } from 'src/time-tracker-app/home/home.component';

const container = new Container();

// Bind component constructors
container
  .bind<VueClass>(registry.HomeComponent)
  .toConstructor(HomeComponent);
container
  .bind<VueClass>(registry.AppComponent)
  .toConstructor(AppComponent);

export { container };
