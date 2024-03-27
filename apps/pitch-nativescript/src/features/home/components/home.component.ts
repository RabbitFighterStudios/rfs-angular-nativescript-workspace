import { Component } from '@angular/core';
import { setStatusBarColor } from '../../../utils';
import { EventData, NavigatedData, Page } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  ngOnInit() {
    setStatusBarColor('dark', '#333');
  }

  goTo(destination: string) {
    alert('Going to ' + destination);
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
