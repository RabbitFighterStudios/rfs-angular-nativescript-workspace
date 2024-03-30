// angular
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular'

// app
import { SharedModule } from './features/shared/shared.module'
import { ScalesComponent } from './app/scales/scales.component'
import { SettingsComponent } from './app/settings/settings.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./app/notes/notes.module').then((m) => m.NotesModule),
  },
  {
    path: 'scales',
    loadChildren: () =>
      import('./app/scales/scales.module').then((m) => m.ScalesModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./app/settings/settings.module').then((m) => m.SettingsModule),
  },
]

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
