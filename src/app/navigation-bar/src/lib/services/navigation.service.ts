import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { PageItem } from '../models/PageItem';
import { PAGE_ITEMS } from '../data/PageItems';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
    this.subscribeToRouterChanges();
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
  private subscribeToRouterChanges(): void {
    this.subscriptions.push(
      this.router.events.subscribe((e) => {
        console.log('router changes: ' + this.route);
        if (e instanceof NavigationEnd) {
          this.currentPageSubject.next(e.urlAfterRedirects);
          console.log(e.urlAfterRedirects);
        }
      })
    );
  }
}