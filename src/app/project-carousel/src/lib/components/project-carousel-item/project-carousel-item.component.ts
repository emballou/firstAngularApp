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
     * Retrieves project image
     */
    public getProjectImage(): string {
        return this.project?.images?.[0] ?? 'https://picsum.photos/200';
    }
}
