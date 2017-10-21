import Vue, { Component } from 'vue';
import { AppComponent } from 'src/basic-app/app/app.component';
import { AdditionalInfoComponent } from 'src/basic-app/additional-info/additional-info.component';
import { container, registry } from './di';

// Setup root container
container
  .bind<Component>(registry.AppComponent)
  .toConstructor(AppComponent);
container
  .bind<Component>(registry.AdditionalInfoComponent)
  .toConstructor(AdditionalInfoComponent);

// Setup root component
/* tslint:disable:no-unused-expression */
new Vue({
  el: '#basic-app-main',
  render: r => r(container.get(registry.AppComponent)),
  components: {
    'additional-info': container.get(registry.AdditionalInfoComponent)
  }
});
