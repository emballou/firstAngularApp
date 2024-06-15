import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageItem } from '../../models/PageItem';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'zs-navigation-bar-item',
  templateUrl: './navigation-bar-item.component.html',
  styleUrls: ['./navigation-bar-item.component.scss']
})

/**
 * Navigation Bar Item Component
 */
export class NavigationBarItemComponent implements OnInit, OnDestroy {
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
