import { Component } from '@angular/core';
import { TBService } from '../../services/tb.service';
import { NbDialogService } from '@nebular/theme';
import { PagingService } from '../../services/paging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-HD',
  providers:[TBService],
  styleUrls: ['./HD.component.scss'],
  templateUrl: './HD.component.html',
})

export class HDComponent {
  hd:any[];
  names: string[] = [];
  devices: any[];
  hdId: string;
  filter: any = {};
  pager: any = {};
  pagedItems = [];
  customer: any[];
  filteredHD = [];

  constructor(private tbservice:TBService,
    private router: Router, private pagerService: PagingService){}

  ngOnInit() {
    this.tbservice.getHD().subscribe(hd => {
      this.hd=hd;
      console.log(hd);
    this.filteredHD = this.hd;
    this.setPage(1);
     });
   }
   gotohdtrans(hd){
    this.router.navigate(['pages/dashboard/Hard-Curency', hd.id,hd.amount]);

  }
     setPage(page: number) {
       this.pager = this.pagerService.getPager(this.filteredHD.length, page);
       this.pagedItems = this.filteredHD.slice(this.pager['startIndex'], this.pager['endIndex'] + 1);
     }
     
   
     back() {
       this.router.navigate(['pages/dashboard/states']);
     }
     filterChange() {
       this.filteredHD = this.hd.filter(item => this.applyFilter(item, this.filter));
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
  

  }

