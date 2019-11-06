import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {APP_MODULES} from './app.modules-imports';
import {APP_PROVIDERS} from "./app.providers";
import {APP_DECLARATIONS} from './app.declarations';

@NgModule({
  declarations: APP_DECLARATIONS,
  entryComponents: [],
  imports: APP_MODULES,
  providers: APP_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule {}
