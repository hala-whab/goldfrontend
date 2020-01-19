import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { Electricity, ElectricityChart, ElectricityData } from '../../../@core/data/electricity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { TBService } from '../../services/tb.service';
import { Router } from '@angular/router';
import { PagingService } from '../../services/paging.service';

@Component({
  selector: 'ngx-checkTrans',
  providers: [TBService],
  styleUrls: ['./checkTrans.component.scss'],
  templateUrl: './checkTrans.component.html',
})
export class checkTransComponent implements OnDestroy {

  private alive = true;
  currentTheme: string;
  themeSubscription: any;
  debt :any[];
  customerId: string;
  filter: any = {};
  pager: any = {};
  pagedItems = [];
  filteredCustomers = [];
 
  
  // consumptionCols: any[] = [
  //   { field: 'customer_name', header: 'Customer name' },
  //   { field: 'weight', header: 'Grams bought' },
  //   { field: 'gram_cash_price', header: 'cash Price' },
  //   { field: 'gram_card_price', header: 'Card Price' },
  //   { field: 'dept_grams', header: 'debt Grams' },
  //   { field: 'remaning', header: 'Remaning' }
  // ];
   
  constructor(private tbService: TBService,
    private router: Router,
    private pagerService: PagingService,
              private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe();
      
  }
  ngOnInit() {
    this.tbService.getdebt().subscribe(debt => {
      console.log(debt);
      this.debt=debt;
   
    this.filteredCustomers = this.debt;
    this.setPage(1);
     });
   }
   
     setPage(page: number) {
       this.pager = this.pagerService.getPager(this.filteredCustomers.length, page);
       this.pagedItems = this.filteredCustomers.slice(this.pager['startIndex'], this.pager['endIndex'] + 1);
     }
     filterChange() {
      this.filteredCustomers = this.debt.filter(item => this.applyFilter(item, this.filter));
      this.setPage(1);
    }
  
    applyFilter(item: any, filter: any): boolean {
      for (const field in filter) {
        if (filter[field]) {
          if ((typeof item[field] === 'undefined' || item[field] === null) && filter[field] !== '-1') {
            return false;
          }
          if (typeof filter[field] === 'string' && field !== 'status') {
  
            if (typeof item[field] !== 'undefined' &&
              item[field] !== null && item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
              return false;
            }
          } else if (typeof filter[field] === 'number' || field === 'status') {
            if (item[field] !== null && item[field] !== parseInt(filter[field]) && filter[field] !== '-1') {
              return false;
            }
          } else if (typeof filter[field] === 'string' && field !== 'status') {
  
            if (typeof item[field] !== 'undefined' && item[field] !== null &&
              item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
              return false;
            }
          }
        }
      }
      return true;
    }
    check(debt){
      this.router.navigate(['pages/dashboard/customerdebt', debt.id,debt.remaning,debt.gram_card_price,debt.gram_cash_price]);
    }
  ngOnDestroy() {
    this.alive = false;
  }
}
