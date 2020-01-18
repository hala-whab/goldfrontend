import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { PagingService } from '../../services/paging.service';
import { Contacts, RecentUsers, UserData } from '../../../@core/data/users';
import { TBService } from '../../services/tb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-checkCustomerDetails',
    providers: [TBService],
  styleUrls: ['./checkCustomerDetails.component.scss'],
  templateUrl: './checkCustomerDetails.component.html',
})
export class checkCustomerDetailsComponent  {

  
  customers: any[];
  devices: any[];
  customerId: string;
  filter: any = {};
  pager: any = {};
  pagedItems = [];
  customer: any[];
  filteredCustomers = [];
  cols:any[];
  

  isHidden: boolean;

  constructor(private tbService: TBService,
    private router: Router,
    private pagerService: PagingService) {

     }

  ngOnInit() {
 this.tbService.getCustomers().subscribe(customers => {
   this.customers=customers;
   console.log(customers);
 this.filteredCustomers = this.customers;
 this.setPage(1);
  });

  this.cols = [
    { field: 'name', header: 'Customer Name' },
    { field: 'telephone', header: 'Customer Telephone' },
    { field: 'another_telephone', header: 'Customer Another Telephone' },
    { field: 'address', header: 'Customer Address' }
];
}



  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.filteredCustomers.length, page);
    this.pagedItems = this.filteredCustomers.slice(this.pager['startIndex'], this.pager['endIndex'] + 1);
  }
  

  back() {
    this.router.navigate(['pages/dashboard/states']);
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
  gotocustomertrans(customer){
    this.router.navigate(['pages/dashboard/specificcustomertrans', customer.id]);

  }
}

