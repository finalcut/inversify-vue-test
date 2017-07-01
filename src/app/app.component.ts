import { Component, Vue } from 'vue-property-decorator';
import { injectable } from 'inversify';
import { appContainer, containerTypes, componentResolver, VueClass } from 'src/app/app.container';
import * as Template from './app.component.html?style=./app.component.scss';

@Template
@Component({
  components: {
    'additional-info': componentResolver(() => appContainer.get<VueClass>(containerTypes.AdditionalInfoComponent))
  }
})
@injectable()
export class AppComponent extends Vue {
  public message = 'Hello Vue.js!';
}
