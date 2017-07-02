import { ContainerizedVue } from "src/lib/containerized-vue";
import { containerTypes } from "src/app/app.types";
import { appContainer } from "src/app/app.container";

ContainerizedVue.prototype.$container = appContainer;

/* tslint:disable:no-unused-expression */
new ContainerizedVue({
  el: "#app-main",
  render: r => r(appContainer.get(containerTypes.AppComponent))
});
