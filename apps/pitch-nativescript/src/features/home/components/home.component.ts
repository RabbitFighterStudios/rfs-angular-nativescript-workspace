import { Component } from '@angular/core';
import { setStatusBarColor } from '../../../utils';
import { EventData, NavigatedData, Page } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

      .btn-rfs-rounded {
        border-radius: 8px;
        height: 38rem;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 500;
        color: #333;
        background-color: #f9d369 !important;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .tagline {
        padding-top: 56px;
        font-size: 22px;
        font-weight: 600;
        text-align: center;
        font-family: 'Poppins', sans-serif !important;
        color: white;
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        font-family: 'Inter', sans-serif !important;
        color: white;
      }

      .flex-row-layout {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
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
