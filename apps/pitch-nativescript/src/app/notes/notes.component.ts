import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'rfs-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.scss'],
})
export class NotesComponent {
  router = inject(Router)

  goTo(destination: 'Notes' | 'Scales' | 'Settings' | 'Back'): void {
    if (this.router) {
      this.router.navigate([destination.toLowerCase()])
      return
    }
  }
}
