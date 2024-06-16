import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit, OnDestroy {
  // TODO: assign this a custom type
  public socialItems: any = [];

  /**
   * Constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.socialItems.push({
      link: 'https://www.linkedin.com/in/eric-ballou-777392198/',
      icon: 'bi-linkedin',
      text: 'LinkedIn'
    })
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {}
}