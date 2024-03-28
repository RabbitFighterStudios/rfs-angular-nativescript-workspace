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

  constructor() {}

  ngOnInit() {
    setStatusBarColor('dark', '#232323');
  }

  goTo(destination: string): void {
    if (destination === 'Notes') {
      try {
        this.router.navigate(['/notes']);
      } catch (error) {
        console.error(error);
      }

    } else {
      alert('Going to ' + destination);
    }

  }





}
