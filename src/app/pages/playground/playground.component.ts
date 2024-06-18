import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageItem } from 'src/app/navigation-bar/src/lib/models/PageItem';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})

/**
 * What's Now Component
 */
export class PlaygroundComponent implements OnInit, OnDestroy {
  public page: PageItem = null!;
  constructor() {

  }

  /**
   * ngOnInit
   */
  public ngOnInit() { 
    this.page = {
      title: 'Title',
      link: 'playground',
      underConstruction: false,
      hidden: false,
      disabled: true,
    };
  }

  /**
   * ngOnDestroy
   */
  public ngOnDestroy() { }
}