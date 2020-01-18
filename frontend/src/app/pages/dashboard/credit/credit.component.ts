import {  takeWhile } from 'rxjs/operators';
import {  Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-credit',
  styleUrls: ['./credit.component.scss'],
  templateUrl: './credit.component.html',
})
export class creditComponent implements  OnDestroy {

  private alive = true;


  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
