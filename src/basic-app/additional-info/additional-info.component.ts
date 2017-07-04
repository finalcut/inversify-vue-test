import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import * as Template from './additional-info.component.html?style=./additional-info.component.scss';

@Template
@Component({
  name: 'additional-info'
})
@injectable()
export class AdditionalInfoComponent extends Vue {
  public name = 'Inversify Vue Test';
  public version = '0.0.1';

  constructor() {
    super();
    console.log('Constructing additional info');
  }
}
