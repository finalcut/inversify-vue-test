import Vue from 'vue';
import { AppComponent } from 'src/components/app/app.component';

new Vue({
  el: '#app-main',
  render: r => r(AppComponent)
});