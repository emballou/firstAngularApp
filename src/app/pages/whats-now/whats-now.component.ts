import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatusUpdateItem } from '../../status-updates/src/lib/models/StatusUpdateItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-whats-now',
  templateUrl: './whats-now.component.html',
  styleUrls: ['./whats-now.component.scss']
})

/**
 * What's Now Component
 */
export class WhatsNowComponent implements OnInit, OnDestroy {

  public name: string = '';
  public song: string = '';
  public status: string = '';
  private subscriptions: Subscription[] = [];

  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit() {}

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  sendUpdate(): void {
    alert('Update sent.');
  }
}