// src/app/features/details/details-routing.module.ts

import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ScalesComponent } from './scales.component'

export const routes: Routes = [
  {
    path: '',
    component: ScalesComponent,
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
})
export class ScalesRoutingModule {}
