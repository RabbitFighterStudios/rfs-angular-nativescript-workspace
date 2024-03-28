import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { setStatusBarColor } from '../../../utils';

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

  goTo(destination: string): void {
    if (this.router) {
      this.router.navigate([destination.toLowerCase()]);
      return;
    }
  }
}
