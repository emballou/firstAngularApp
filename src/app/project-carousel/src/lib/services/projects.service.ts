import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PROJECT_ITEMS } from '../data/ProjectItems';
import { ProjectItem } from '../models/ProjectItem';

/**
 * Projects Service
 */
@Injectable({
    providedIn: 'root'
})
export class ProjectsService implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  
  /**
   * Constructor
   */
  constructor() {}

  /**
   * On Init
   */
  public ngOnInit(): void {}

  /**
   * On Destroy
   */
  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Gets the main navigation items.
   */
  public getProjectItems() {
    return PROJECT_ITEMS.filter((project: ProjectItem) =>  {
        return !project?.hidden;
    });
  }
}