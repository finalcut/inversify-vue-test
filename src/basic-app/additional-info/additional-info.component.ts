import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import template from 'src/basic-app/additional-info/additional-info.component.vue';

@Component({
  ...template,
  ...{
    name: 'additional-info'
  }
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
