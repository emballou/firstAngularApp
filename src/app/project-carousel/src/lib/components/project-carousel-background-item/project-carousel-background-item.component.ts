import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectItem } from '../../models/ProjectItem';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'zs-project-carousel-background-item',
    templateUrl: './project-carousel-background-item.component.html',
    styleUrls: ['./project-carousel-background-item.component.scss']
})

/**
 * Project Carousel Background Item Component
 */
export class ProjectCarouselBackgroundItemComponent implements OnInit, OnDestroy {
    @Input() project!: ProjectItem;
    @Input() relativeIndex: number = 0;
    @Input() absoluteIndex: number = 0;
    public previewImage: string = '';
    private subscriptions: Subscription[] = [];
    public transformValue = '';
    public zIndexValue = 0;
    public transformScaleValue = '';

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
        this.previewImage = this.getPreviewImage();
        this.calculateTransformValue();
        console.log("This is from a background item :) - ", this.relativeIndex);
        this.zIndexValue = this.calculateZIndex();
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
    public getPreviewImage(): string {
        return this.project?.images?.[0] ?? '';
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

    /**
     * Calculate the amount to transform the preview image on the x-axis based on the relative index.
     */
    public calculateTransformValue(): void {
        const isRight: boolean = this.relativeIndex > 0;
        const posRelative = Math.abs(this.relativeIndex);
        let translateAmt: number = Math.pow(posRelative, 1.5) * 25;
        if (isRight) translateAmt *= -1;
        let scaleAmt: number = Math.abs(this.relativeIndex * .2) * -1;
        this.transformValue = `translateX(${translateAmt}%) scale(${1 + scaleAmt})`;
    }
}
