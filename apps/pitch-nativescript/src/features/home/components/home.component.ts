import { Component, inject } from '@angular/core';
import { setStatusBarColor } from '../../../utils';
import { EventData, NavigatedData, Page } from '@nativescript/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  router = inject(Router);

  ngOnInit() {
    setStatusBarColor('dark', '#232323');
  }

  goTo(destination: 'Notes' | 'Scales' | 'Settings'): void {
    if (this.router) {
      this.router.navigate([destination.toLowerCase()]);
      return;
    }
  }
}
