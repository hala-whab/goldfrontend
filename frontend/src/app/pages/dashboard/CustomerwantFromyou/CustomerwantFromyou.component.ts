import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TBService } from '../../services/tb.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PagingService } from '../../services/paging.service';

@Component({
  selector: 'ngx-CustomerwantFromyou',
  providers: [TBService],
  styleUrls: ['./CustomerwantFromyou.component.scss'],
  templateUrl: './CustomerwantFromyou.component.html',
})
export class CustomerwantFromyouComponent  {
  customers: any[];
  devices: any[];
  customerId: string;
  filter: any = {};
  pager: any = {};
  pagedItems = [];
  filteredCustomers = [];
  id:String;
remaning :String;
gram_card_price:String;
gram_cash_price: String;


  isHidden: boolean;

  constructor(private tbService: TBService,
    private router: Router,
    private route: ActivatedRoute,
    private pagerService: PagingService) {

     }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.remaning=param.remaning;
      this.gram_card_price=param.gram_card_price;
      this.gram_cash_price=param.gram_cash_price;
 this.tbService.getdebtpurchasepaymentdetailsbyid(this.id).subscribe(customers => {
   this.customers=customers;
   console.log(customers);
 this.filteredCustomers = this.customers;
 this.setPage(1);
  });
})
  }

setPage(page: number) {
  this.pager = this.pagerService.getPager(this.filteredCustomers.length, page);
  this.pagedItems = this.filteredCustomers.slice(this.pager['startIndex'], this.pager['endIndex'] + 1);
}

  filterChange() {
    this.filteredCustomers = this.customers.filter(item => this.applyFilter(item, this.filter));
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
  pay(debt){
    this.router.navigate(['pages/dashboard/loanpaymentdetails', this.id,this.remaning,this.gram_card_price,this.gram_cash_price]); 
  }
}
 