import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageItem } from 'src/app/models/PageItem';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'zs-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

/**
 * Navigation Bar Component
 */
export class NavigationBarComponent implements OnInit {

    pageItems: PageItem[] = [];
  
    /**
     * Constructor
     * @param {NavigationService} navigationService Navigation Service
     */
    constructor(private navigationService: NavigationService) {
    }

    /**
     * ngOnInit
     */
    ngOnInit() {
        this.pageItems = this.navigationService.getPageItems();
        console.log(this.pageItems);
    }
}
