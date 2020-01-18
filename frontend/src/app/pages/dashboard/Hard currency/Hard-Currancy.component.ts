import { delay } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService, NbDateService } from '@nebular/theme';
import { TBService } from '../../services/tb.service';
import { ActivatedRoute, Router } from '@angular/router';

declare const echarts: any;

@Component({
  selector: 'ngx-Hard-Currancy',
  providers:[TBService],
  styleUrls: ['./Hard-Currancy.component.scss'],
  templateUrl: 'Hard-Currancy.component.html',
})
export class HardCurrancyComponent implements  OnDestroy {

  private value = 0;
  amount:string;
  cashprice:string;
  cardprice:string;
  cashpaid:string;
  cardpaid:string;
  debt:string;
  option: any =  {};
  themeSubscription: any;
 
   min: Date;
   max: Date;
  Duedate: Date;

 

id:any;
 
  amount1:string;
  cashprice1:string;
  cardprice1:string;
  cashpaid1:string;
  cardpaid1:string;
  debt1:string;
  option1: any =  {};
  Duedate1: Date;
  transaction1 :string;
  options1 = [
    { value: 'direct', label: 'direct', checked: true },
    { value: 'debt', label: 'debt' }
  ];

  constructor(private theme: NbThemeService,protected dateService: NbDateService<Date>,private tbservice:TBService, private router: Router,
    private route: ActivatedRoute) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param.id;})}

ss(){

  {
    this.tbservice.updatesavewhenDsellHD(this.cardpaid,this.cardpaid);
    this.tbservice.DsellHD(this.id,this.amount,this.cashpaid,this.cardpaid);
  }

 
}
s(){
  console.log(this.Duedate1.getTime());
}
selecttrans(event : any)
{
console.log(event.value);
{
  var de1= <HTMLInputElement>document.getElementById("debt");
  de1.disabled=true;
  var dd= <HTMLInputElement>document.getElementById("due-date");
  dd.disabled=true;
  var price= <HTMLInputElement>document.getElementById("date");
  price.disabled=true;
}
}
selecttrans1(event : any)
{
console.log(event.value);
if(event.value=='debt')
{
  var cashprice1= <HTMLInputElement>document.getElementById("debt1");
  cashprice1.disabled=false;
  var cashprice2= <HTMLInputElement>document.getElementById("due-date1");
  cashprice2.disabled=false;
  var price= <HTMLInputElement>document.getElementById("date1");
  price.disabled=false;
  
} else {
  var cashprice1= <HTMLInputElement>document.getElementById("debt1");
  cashprice1.disabled=true;
  var cashprice2= <HTMLInputElement>document.getElementById("due-date1");
  cashprice2.disabled=true;
  var price= <HTMLInputElement>document.getElementById("date1");
  price.disabled=true;
}
}


  ngOnDestroy() {
  }
}
