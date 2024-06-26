import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'
import { CoreModule } from './core/core.module'
import { SharedModule } from './features/shared/shared.module'

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
