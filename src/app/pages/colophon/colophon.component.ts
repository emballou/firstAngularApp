import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-colophon',
  templateUrl: './colophon.component.html',
  styleUrls: ['./colophon.component.scss']
})

/**
 * Colophon Component
 */
export class ColophonComponent implements OnInit, OnDestroy {
  public inspirationPages: string[] = [
    "https://www.jack-case.pro/now",
    "https://0xadada.pub/",
    "https://info.perjesi.com/#/",
    "https://benharr.is/",
    "https://davidbieber.com/"
  ];
  constructor() {}

  /**
   * ngOnInit
   */
  public ngOnInit() { 
  }

  /**
   * ngOnDestroy
   */
  public ngOnDestroy() { }
}