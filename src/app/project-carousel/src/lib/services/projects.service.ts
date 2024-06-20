import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PROJECT_ITEMS } from '../data/ProjectItems';
import { ProjectItem } from '../models/ProjectItem';

/**
 * Projects Service
 */
@Injectable({
    providedIn: 'root'
})
export class ProjectsService implements OnInit, OnDestroy {
  private currentIndexSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentIndex$: Observable<number> = this.currentIndexSubject.asObservable();
  public projectItems: ProjectItem[] = PROJECT_ITEMS;
  private subscriptions: Subscription[] = [];
  
  /**
   * Constructor
   */
  constructor() {}

  /**
   * On Init
   */
  public ngOnInit(): void {
    this.initializeCurrentIndex();
  }

  /**
   * On Destroy
   */
  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Initializes the current index.
   */
  private initializeCurrentIndex() {
    const index = Math.floor(((this.projectItems.length - 1) / 2));
    this.currentIndexSubject.next(index);
  }

  /**
   * Gets the main navigation items.
   */
  public getProjectItems(): ProjectItem[] {
    return PROJECT_ITEMS;
  }

  /**
   * Reduce the previewed index.
   */
    public decreasePreviewedIndex() {
      const currentIndex = this.currentIndexSubject.value;
      const updatedIndex = (currentIndex > 0) ? currentIndex - 1 : this.projectItems.length - 1;
      this.currentIndexSubject.next(updatedIndex);
    }

  /**
   * Increment the previewed index.
   */
  public increasePreviewedIndex() {
    const currentIndex = this.currentIndexSubject.value;
    const updatedIndex = (currentIndex < this.projectItems.length - 1) ? currentIndex + 1 : 0;
    this.currentIndexSubject.next(updatedIndex);
  }

  /**
   * Determines whether or not the project is previewed in the carousel.
   */
  public isPreviewedProject(project: ProjectItem) {
    const currentIndex = this.currentIndexSubject.value;
    return this.projectItems[currentIndex]?.name == project.name;
  }

  /**
   * Get the relative index to the previewed index.
   * 
   * @param {number} absoluteIndex 
   */
  public getRelativeIndex(absoluteIndex: number) {
    const currentIndex = this.currentIndexSubject.value;
    return absoluteIndex - currentIndex;
  }
}