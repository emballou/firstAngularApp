import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectItem } from '../../models/ProjectItem';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'zs-project-carousel-item',
    templateUrl: './project-carousel-item.component.html',
    styleUrls: ['./project-carousel-item.component.scss']
})

/**
 * Project Carousel Item Component
 */
export class ProjectCarouselItemComponent implements OnInit, OnDestroy {
    @Input() project!: ProjectItem;
    @Input() absoluteIndex: number = 0;
    public previewedIndex: number = 0;
    public relativeIndex: number = 0;
    public isPreviewed: boolean = false;
    private subscriptions: Subscription[] = [];

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
        this.subscribeToPreviewedIndex();
        console.log("Foreground item - Absolute: ", this.absoluteIndex, " - Relative: ", this.relativeIndex);
    }

    /**
     * ngOnDestroy
     */
    public ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    /**
     * Gets the image to preview for the project item.
     */
    public getPreviewImage() {
        return this.project?.images?.[0];
    }

    /**
     * Subscribe to the currently previewed index.
     */
    private subscribeToPreviewedIndex(): void {
        this.subscriptions.push(
            this.projectsService.currentIndex$.subscribe(index => {
                this.previewedIndex = index;
                this.relativeIndex = this.projectsService.getRelativeIndex(this.absoluteIndex);
                this.isPreviewed = this.relativeIndex === 0;
                console.log("Absolute: ", this.absoluteIndex, " Relative: ", this.relativeIndex, " Previewed: ", this.previewedIndex);
            })
        );
    }

    /**
     * Calculate the z-index value for each project based on it's relative index.
     * 
     * @returns {number} z-index property value
     */
    public calculateZIndex(): number {
        // if position relative index, convert to negative
        let z: number = this.relativeIndex > 0 ? this.relativeIndex * -1 : this.relativeIndex;
        return z;
    }
}
