import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { ScalesRoutingModule } from './scales-routing.module'
import { ScalesComponent } from './scales.component'

@NgModule({
  imports: [NativeScriptCommonModule, ScalesRoutingModule],
  declarations: [ScalesComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ScalesModule {}
