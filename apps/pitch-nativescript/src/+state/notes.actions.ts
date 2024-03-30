import { createAction, props } from '@ngrx/store'
import { NotesEntity } from './notes.models'

export const initNotes = createAction('[Notes Page] Init')

export const loadNotesSuccess = createAction(
  '[Notes/API] Load Notes Success',
  props<{ notes: NotesEntity[] }>(),
)

export const loadNotesFailure = createAction(
  '[Notes/API] Load Notes Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>(),
)
