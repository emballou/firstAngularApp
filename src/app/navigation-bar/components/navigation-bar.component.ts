import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageItem } from '../models/PageItem';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'zs-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

/**
 * Navigation Bar Component
 */
export class NavigationBarComponent implements OnInit, OnDestroy {

    public pageItems: PageItem[] = [];
    public currentPage: string = '';
    private subscriptions: Subscription[] = [];


    /**
     * Constructor
     * @param {NavigationService} navigationService Navigation Service
     */
    constructor(private navigationService: NavigationService) {}

    /**
     * ngOnInit
     */
    public ngOnInit() {
        this.pageItems = this.navigationService.getPageItems();
        this.subscribeToCurrentPage();
    }

    /**
     * ngOnDestroy
     */
      public ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
      }

    /**
     * Navigate to page.
     * 
     * @param {string} pageLink page router link 
     */
    public navigateToPage(pageLink: string) {
      this.navigationService.navigateToPage(pageLink);
    }

    /**
     * Subscribes to the current page route.
     */
    private subscribeToCurrentPage(): void {
      this.subscriptions.push(
        this.navigationService.currentPage$.subscribe((page: string) => {
          console.log('from: ' + this.currentPage + '\nto: ' + page);
          this.currentPage = page;
        })
      );
    }
}
