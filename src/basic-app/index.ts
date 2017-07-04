import { Vue, VueClass, Container } from 'src/lib/vue.barrel';
import { registry } from 'src/basic-app/registry';

import { AppComponent } from 'src/basic-app/app/app.component';
import { AdditionalInfoComponent } from 'src/basic-app/additional-info/additional-info.component';

const rootContainer = new Container();

// Bind component constructors
rootContainer
  .bind<VueClass>(registry.AppComponent)
  .toConstructor(AppComponent);
rootContainer
  .bind<VueClass>(registry.AdditionalInfoComponent)
  .toConstructor(AdditionalInfoComponent);

/* tslint:disable:no-unused-expression */
new Vue({
  el: '#basic-app-main',
  render: r => r(rootContainer.get(registry.AppComponent)),
  provide: () => ({
    container: rootContainer,
    registry
  })
});
