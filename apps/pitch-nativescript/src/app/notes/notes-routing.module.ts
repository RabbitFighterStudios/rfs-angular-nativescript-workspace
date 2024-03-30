// src/app/features/details/details-routing.module.ts

import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { NotesComponent } from './notes.component'

export const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
})
export class NotesRoutingModule {}
