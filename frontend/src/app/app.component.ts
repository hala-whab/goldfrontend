/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor() {
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(e: KeyboardEvent) {
    if(e.keyCode == 8) {
      history.back();}
  }
  ngOnInit(): void {

  }
}
