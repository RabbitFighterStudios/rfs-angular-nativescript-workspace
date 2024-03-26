import { Component } from '@angular/core';
import { setStatusBarColor } from '../../../utils';
import { EventData, Frame, NavigatedData, Page } from '@nativescript/core';

const items = Array.from({ length: 100 }).map((_, i) => ({
  title: `Item ${i}`,
}));

@Component({
  moduleId: module.id,
  selector: 'app-home',
  styles: [
    `
      .btn-rounded-sm {
        border-radius: 100px;
        background-color: #fc4d67;
      }

      .h-center {
        width: 100%;
        color: white;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
      }
    `,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  listOfPerks = [
    'This is a nativescript application in an Nx workspace',
    'Multiple applications can have shared resources like NgRx',
    'UI libs and data libs and can be used for web, iOS and Android',
    '∆ngular / NativeScript POC by Joshua Calafell',
  ];

  ngOnInit() {
    setStatusBarColor('dark', '#333');
  }

  onLogin() {
    alert('Logging in');
  }

  onRegister() {
    alert('Registering');
  }

  goToDetails() {
    alert('Going to details');
  }

  onLoaded(args: EventData) {
    const page = args.object as Page;
  }

  onUnloaded(args: EventData) {
    const page = args.object as Page;
  }

  onLayoutChanged(args: EventData) {
    const page = args.object as Page;
  }

  onNavigatedTo(args: NavigatedData) {
    const page = args.object as Page;
    console.log(args.isBackNavigation);
  }

  onNavigatingFrom(args: NavigatedData) {
    const page = args.object as Page;
    console.log(args.isBackNavigation);
  }

  onNavigatedFrom(args: NavigatedData) {
    const page = args.object as Page;
    console.log(args.isBackNavigation);
  }

  onNavigateToList() {
    console.log('Navigating to list');
  }
}
