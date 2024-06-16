import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { PageItem } from '../models/PageItem';
import { PAGE_ITEMS } from '../data/PageItems';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

/**
 * Navigation Service
 */
@Injectable({
    providedIn: 'root'
})
export class NavigationService implements OnInit, OnDestroy {
  
  private currentPageSubject = new BehaviorSubject<string>('');
  private subscriptions: Subscription[] = [];
  public currentPage$: Observable<string> = this.currentPageSubject.asObservable();
  
  /**
   * Constructor
   * 
   * @param {Router} router Router 
   */
  constructor(private route: ActivatedRoute, private router: Router) {}

  /**
   * On Init
   */
  public ngOnInit(): void {
    this.subscribeToFirstRoute();
  }

  /**
   * On Destroy
   */
  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Gets the main navigation items.
   */
  public getPageItems() {
    return PAGE_ITEMS.filter((page: PageItem) =>  {
        return !page.hidden;
    });
  }

  /**
   * Navigate to page.
   * 
   * @param {string} pageLink page router link 
   */
  public navigateToPage(pageLink: string) {
    console.log('navigate to page: ' + pageLink);
    this.router.navigate([pageLink]);
    this.currentPageSubject.next(pageLink);
  }

  /**
 * Subscribe to router navigation changes.
 */
  private subscribeToFirstRoute(): void {
    // TODO: DETERMINE THE FIRST URL ON PAGE RELOAD
    this.subscriptions.push(
      this.route.url.subscribe((urlSegment: UrlSegment[]) => {
        console.log('first url detected: ' + urlSegment);
        this.currentPageSubject.next(urlSegment[0].path);
      })
    );
  }
}