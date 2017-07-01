import Vue from 'vue';
import { containerTypes } from 'src/app/app.types';
import { appContainer } from 'src/app/app.container';

/* tslint:disable:no-unused-expression */
new Vue({
  el: '#app-main',
  render: r => r(appContainer.get(containerTypes.AppComponent))
});
