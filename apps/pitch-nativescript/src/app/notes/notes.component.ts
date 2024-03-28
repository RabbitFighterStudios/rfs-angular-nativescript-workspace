import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../features/shared/shared.module';

@Component({
  selector: 'notes',
  standalone: false,
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {}
