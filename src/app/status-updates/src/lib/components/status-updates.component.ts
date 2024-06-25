import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatusUpdateItem } from '../models/StatusUpdateItem';
import { FAKE_STATUS_UPDATES } from '../data/fake-data';

@Component({
  selector: 'zs-status-updates',
  templateUrl: './status-updates.component.html',
  styleUrls: ['./status-updates.component.scss']
})

/**
 * Status Updates Component
 */
export class StatusUpdatesComponent implements OnInit, OnDestroy {
  @Input() displayCount: number = 3;
  public displayedUpdates: StatusUpdateItem[] = [];
  private subscriptions: Subscription[] = [];

  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.displayedUpdates = this.retrieveStatusUpdates(this.displayCount);
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public sendUpdate(): void {
    alert('Update sent.');
  }

  /**
   * Given the count of status update items to display, returns a list
   * of status updates sorted by date in descending order.
   * 
   * @param {number} displayCount number of status update items to display in the UI 
   * @returns list of status updates
   */
  public retrieveStatusUpdates(displayCount: number): StatusUpdateItem[] {
    const statusUpdateList: StatusUpdateItem[] = FAKE_STATUS_UPDATES.sort((statusA, statusB)=> -1 * (statusA.date.getTime() - statusB.date.getTime()));
    return statusUpdateList.slice(0, displayCount);
  }
}