import { Injectable } from '@angular/core';
import { PageItem } from '../models/PageItem';
import { PAGE_ITEMS } from '../data/PageItems';

/**
 * Navigation Service
 */
@Injectable({
    providedIn: 'root'
})
export class NavigationService {
  /**
   * Gets the main navigation items.
   */
  public getPageItems() {
    return PAGE_ITEMS.filter((page: PageItem) =>  {
        return !page.hidden;
    });
  }
}