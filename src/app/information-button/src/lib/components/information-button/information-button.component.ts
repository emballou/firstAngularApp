import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfoButtonIcon } from '../../types/InfoButtonIcon';

@Component({
  selector: 'zs-information-button',
  templateUrl: './information-button.component.html',
  styleUrls: ['./information-button.component.scss']
})

/**
 * Information Button Component
 */
export class InformationButtonComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  @Input() public buttonLink?: string;
  @Input() public buttonText?: string;
  @Input() public buttonIcon?: InfoButtonIcon;

  /**
   * Constructor
   */
  constructor() { }

  /**
   * ngOnInit
   */
  public ngOnInit() { }

  /**
   * ngOnDestroy
   */
  public ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
