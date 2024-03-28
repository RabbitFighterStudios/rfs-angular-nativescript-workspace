import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedModule } from '../../features/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  router = inject(Router);

  goTo(destination: 'Notes' | 'Scales' | 'Settings' | 'Back'): void {
    if (this.router) {
      this.router.navigate([destination.toLowerCase()]);
      return;
    }
  }
}
