import { Component } from '@angular/core';
import { setStatusBarColor } from '../../../utils';
import { EventData, Frame, NavigatedData, Page } from '@nativescript/core';

const items = [`First`, `Second`, `Third`];
@Component({
  moduleId: module.id,
  selector: 'app-home',
  styles: [
    `
      .btn-rounded-sm {
        border-radius: 12px;
        margin: 4px 8px;
        font-size: 13px;
        font-weight: 600;
        color: black;
        background-color: #f9d369;
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

  items: Array<string | number>;

  ngOnInit() {
    this.items = items;
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
