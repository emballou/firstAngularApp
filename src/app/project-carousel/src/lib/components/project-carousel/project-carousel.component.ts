import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  @Input() visibleCount: number = 5;
  public halfVisibleCount: number = 2;
  public projectItems: ProjectItem[] = [];
  public featuredProjectItem = '';
  public previewedIndex: number = 0;
  private subscriptions: Subscription[] = [];
  public currentProjectText: string = "";
  public visibleProjectIndices: number[] = [];

  /**
   * Constructor
   * 
   * @param {ProjectsService} projectsService Projects Service
   */
  constructor(private projectsService: ProjectsService) { }

  /**
   * ngOnInit
   */
  public ngOnInit() {
    this.projectItems = this.projectsService.projectItems;
    this.visibleProjectIndices = this.getVisibleProjectIndices();
    this.halfVisibleCount = Math.floor(this.visibleCount / 2);
    this.subscribeToPreviewedIndex();
  }

  /**
   * ngOnDestroy
   */
  public ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Previous project navigation event handler.
   */
  public previousButtonHandler() {
    this.projectsService.decreasePreviewedIndex();
  }

  /**
   * Next button navigation event handler.
   */
  public nextButtonHandler() {
    this.projectsService.increasePreviewedIndex();
  }

  /**
   * Subscribe to the currently previewed index.
   */
  private subscribeToPreviewedIndex(): void {
    this.subscriptions.push(
      this.projectsService.currentIndex$.subscribe(index => {
        this.previewedIndex = index;
        this.updateCurrentProjectText();
      })
    );
  }

  private updateCurrentProjectText(): void {
    this.currentProjectText = `${this.previewedIndex + 1} / ${this.projectItems.length}`;
  }

  /**
   * Get the indices of all of the visible projects. 
   * 
   * @returns {number[]} visible project indices
   */
  private getVisibleProjectIndices(): number[] {
    const projectItemLength: number  = this.projectItems.length;
    const half: number = Math.floor(this.visibleCount / 2);
    const start: number  = this.previewedIndex - half;
    const end: number  = this.previewedIndex + half;
    const indices: number[] = [];
    console.log('length ', projectItemLength, ' half ', half, ' start ', start, ' end ', end);
    for (let i = start; i <= end; i++) {
      indices.push((i + projectItemLength) % projectItemLength);
    }
    console.log('Indices: ', indices);
    return indices;
  }
}
