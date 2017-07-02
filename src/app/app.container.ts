import { Container } from 'inversify';

import { containerTypes } from 'src/app/app.types';
import { VueClass } from 'src/lib/component-resolver';
import { AppComponent } from 'src/app/app.component';
import { AdditionalInfoComponent } from 'src/app/additional-info/additional-info.component';

const appContainer = new Container();

// Components need to be bound as a constructor
appContainer.bind<VueClass>(containerTypes.AppComponent).toConstructor(AppComponent);
appContainer.bind<VueClass>(containerTypes.AdditionalInfoComponent).toConstructor(AdditionalInfoComponent);

export { appContainer };
export { containerTypes } from 'src/app/app.types';
export { componentResolver, VueClass } from 'src/lib/component-resolver';
