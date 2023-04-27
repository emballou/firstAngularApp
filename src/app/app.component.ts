import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * App Component
 */
export class AppComponent {
  title = 'First Angular App';
  showNavigation: boolean = false;

  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      this.showNavigation = location.path() !== '';
    });
  }
}
