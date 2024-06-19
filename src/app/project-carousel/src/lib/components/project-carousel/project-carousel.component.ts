import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PROJECT_ITEMS } from '../../data/ProjectItems';

@Component({
  selector: 'zs-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss']
})

/**
 * Project Carousel Component
 */
export class ProjectCarouselComponent implements OnInit, OnDestroy {
    public projectItems = PROJECT_ITEMS;
    public featuredProjectItem = '';
    private subscriptions: Subscription[] = [];

    /**
     * Constructor
     */
    constructor() {}

    /**
     * ngOnInit
     */
    public ngOnInit() {
        // this.projectItems = this.projectsService.getProjects();
    }

    /**
     * ngOnDestroy
     */
      public ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
      }
}
