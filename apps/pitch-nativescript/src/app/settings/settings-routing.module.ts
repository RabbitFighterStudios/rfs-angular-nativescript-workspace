// src/app/features/details/details-routing.module.ts

import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { SettingsComponent } from './settings.component'

export const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
})
export class SettingsRoutingModule {}
