import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectItem } from '../../models/ProjectItem';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'zs-project-carousel-item-detail',
    templateUrl: './project-carousel-item-detail.component.html',
    styleUrls: ['./project-carousel-item-detail.component.scss']
})

/**
 * Project Carousel Item Detail Component
 */
export class ProjectCarouselItemDetailComponent implements OnInit, OnDestroy {
    @Input() project!: ProjectItem;
    @Input() absoluteIndex: number = 0;
    public relativeIndex: number = 0;
    private subscriptions: Subscription[] = [];

    /**
     * Constructor
     */
    constructor() { }

    /**
     * ngOnInit
     */
    public ngOnInit() {}

    /**
     * ngOnDestroy
     */
    public ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
