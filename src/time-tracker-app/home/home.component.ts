import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import * as Template from './home.component.html?style=./home.component.scss';

@Template
@Component
@injectable()
export class HomeComponent extends Vue {
}
