import {  takeWhile } from 'rxjs/operators';
import {  Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TBService } from '../../services/tb.service';

@Component({
  selector: 'ngx-specificcustomertrans',
  styleUrls: ['./specificcustomertrans.component.scss'],
  templateUrl: './specificcustomertrans.component.html',
})
export class specificcustomertransComponent implements  OnDestroy {

  private alive = true;
id:any;
debts:any[];
credits:any[];

  constructor(private theme: NbThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private tbService: TBService,
              private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe();
  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.tbService.getdebtforcustomer(this.id).subscribe(debts => {
        this.debts=debts;
        console.log(debts);
      })
      this.tbService.findcreditforcustomer(this.id).subscribe(credits=>{
this.credits=credits;
console.log(credits);
      })

      })
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
