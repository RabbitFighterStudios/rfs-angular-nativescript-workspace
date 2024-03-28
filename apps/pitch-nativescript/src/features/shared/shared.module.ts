import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
} from '@nativescript/angular';
import { NotesComponent } from '../../app/notes/notes.component';
import { SettingsComponent } from '../../app/settings/settings.component';
import { ScalesComponent } from '../../app/scales/scales.component';

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  NativeScriptCommonModule,
];

@NgModule({
  imports: [...MODULES, NotesComponent, SettingsComponent, ScalesComponent],
  exports: [...MODULES, NotesComponent, SettingsComponent, ScalesComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
