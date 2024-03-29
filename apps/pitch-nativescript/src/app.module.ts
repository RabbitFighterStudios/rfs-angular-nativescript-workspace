import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNotes from './+state/notes.reducer';
import { NotesEffects } from './+state/notes.effects';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forFeature(fromNotes.NOTES_FEATURE_KEY, fromNotes.notesReducer),
    EffectsModule.forFeature([NotesEffects]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
