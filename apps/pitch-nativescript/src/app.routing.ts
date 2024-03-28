// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';
import { NotesComponent } from './app/notes/notes.component';
import { SettingsComponent } from './app/settings/settings.component';
import { ScalesComponent } from './app/scales/scales.component';

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
    component: NotesComponent,
  },
  {
    path: 'scales',
    component: ScalesComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
