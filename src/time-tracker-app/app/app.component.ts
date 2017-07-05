import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import template from 'src/time-tracker-app/app/app.component.vue';

@Component(template)
@injectable()
export class AppComponent extends Vue {
}
