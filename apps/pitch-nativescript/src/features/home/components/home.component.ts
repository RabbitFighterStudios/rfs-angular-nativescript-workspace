import { Component } from '@angular/core';
import { setStatusBarColor } from '../../../utils';

@Component({
  moduleId: module.id,
  selector: 'app-home',
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
    setStatusBarColor('dark', '#97d9e9');
  }
}
