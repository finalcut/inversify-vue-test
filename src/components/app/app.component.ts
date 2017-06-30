import Vue from 'vue'
import Component from 'vue-class-component'
import * as Template from './app.component.html?style=./app.component.scss'

@Template
@Component
export class AppComponent extends Vue {
  message = 'Hello Vue.js!'
}