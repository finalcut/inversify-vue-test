import { Vue, Component, injectable } from 'src/lib/vue.barrel';
import template from 'src/time-tracker-app/home/home.component.vue';

@Component(template)
@injectable()
export class HomeComponent extends Vue {
}
