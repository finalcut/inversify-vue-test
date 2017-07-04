import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import * as Template from './app.component.html?style=./app.component.scss';

@Template
@Component
@injectable()
export class AppComponent extends Vue {
}
