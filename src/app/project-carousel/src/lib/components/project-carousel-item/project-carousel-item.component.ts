import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectItem } from '../../models/ProjectItem';

@Component({
    selector: 'zs-project-carousel-item',
    templateUrl: './project-carousel-item.component.html',
    styleUrls: ['./project-carousel-item.component.scss']
})

/**
 * Project Carousel Item Component
 */
export class ProjectCarouselItemComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    @Input() project!: ProjectItem;
    @Input() isPreviewed: boolean = false;
    @Input() projectIndex: number = 0;
    @Input() previewedIndex: number = 0;

    /**
     * Constructor
     */
    constructor() { }

    /**
     * ngOnInit
     */
    public ngOnInit() { }

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
}
