import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PROJECT_ITEMS } from '../../data/ProjectItems';
import { ProjectItem } from '../../models/ProjectItem';
import { ProjectsService } from '../../services/projects.service';

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
    public currentIndex = 0;
    private subscriptions: Subscription[] = [];

    /**
     * Constructor
     * 
     * @param {ProjectsService} projectsService Projects Service
     */
    constructor(private projectsService: ProjectsService) {}

    /**
     * ngOnInit
     */
    public ngOnInit() {
        this.projectItems = this.projectsService.getProjectItems();
        this.currentIndex = Math.round(((this.projectItems.length - 1) / 2));
        console.log(this.currentIndex);
    }

    /**
     * ngOnDestroy
     */
    public ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    /**
     * Determines whether or not the project is previewed in the carousel.
     */
    public isPreviewedProject(project: ProjectItem) {
      return this.projectItems[this.currentIndex]?.name == project.name;
    }

    /**
     * Next button navigation event handler.
     */
    public nextButtonHandler(event?: Event) {
      this.currentIndex = (this.currentIndex + 1) % this.projectItems.length;
      console.log(this.currentIndex);
    }

    /**
     * Previous project navigation event handler.
     */
    public previousButtonHandler(event?: Event) {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.projectItems.length - 1;
      console.log(this.currentIndex);
    }
}
