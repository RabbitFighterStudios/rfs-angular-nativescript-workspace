import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { setStatusBarColor } from '../../../utils'

const items = Array.from({ length: 100 }).map((_, i) => ({
  title: `Item ${i}`,
}))
@Component({
  moduleId: module.id,
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  router = inject(Router)
  items = items
  ngOnInit() {
    setStatusBarColor('dark', '#232323')
  }

  goTo(destination: string): void {
    if (this.router) {
      this.router.navigate([destination.toLowerCase()])
      return
    }
  }
}
