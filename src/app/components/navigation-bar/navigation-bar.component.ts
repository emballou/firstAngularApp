import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_ITEMS } from 'src/app/data/PageItems';
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
     * @param {Router} router Router
     */
    constructor(private navigationService: NavigationService, private router: Router) {}

    /**
     * ngOnInit
     */
    public ngOnInit() {
        this.pageItems = this.navigationService.getPageItems();
    }

    /**
     * Navigate to page.
     * 
     * @param {string} pageLink page router link 
     */
    public navigateToPage(pageLink: string) {
      this.router.navigate([pageLink]);
    }
}
