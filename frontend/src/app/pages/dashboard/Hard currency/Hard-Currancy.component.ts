import { delay } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService, NbDateService } from '@nebular/theme';
import { TBService } from '../../services/tb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
 
  cashpaid:string;
  cardpaid:string;
  debt:string;
  option: any =  {};
  themeSubscription: any;
 
   min: Date;
   max: Date;
  Duedate: Date;

 

id:any;
 saveamount:any;
  amount1:string;

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
    private route: ActivatedRoute, private modalService:NgbModal) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param.id;
    this.saveamount=param.amount;
    })}

sell()
{
console.log("am here in sell");
if(this.amount&&this.cashpaid&&this.cardpaid)
  {
    this.tbservice.updatesavewhenDsellHD(this.cardpaid,this.cardpaid).subscribe();
    this.tbservice.DsellHD(this.id,this.amount,this.cashpaid,this.cardpaid).subscribe();
    this.tbservice.updateHdamountwhenDsell(this.id,(parseFloat(this.amount)+parseFloat(this.saveamount)).toString()).subscribe();
    this.saveamount=(parseFloat(this.saveamount)+parseFloat(this.amount));
    this.reset()
  }else{
    this.showModal('ERROR',"please enter all feilds");
  }
 
 
}
buy(){
  if(this.amount1&&this.cashpaid1&&this.cardpaid1)
  {
console.log(this.saveamount)
    if(this.saveamount<this.amount1){
      this.showModal("ERROR","You don't have this amount in your Save");
    }
    else{
    this.tbservice.updatesavewhenDbuyHD(this.cardpaid1,this.cardpaid1).subscribe();
    this.tbservice.DbuyHD(this.id,this.amount1,this.cashpaid1,this.cardpaid1).subscribe();
    this.tbservice.updateHdamountwhenDbuy(this.id,(parseFloat(this.saveamount)-parseFloat(this.amount1)).toString()).subscribe(()=>this.showModal("Done","Compelete Transaction"));
  this.saveamount=(parseFloat(this.saveamount)-parseFloat(this.amount1));  
this.reset() 
}
}else{
    this.showModal('ERROR',"please enter all feilds");
  }
 
}
showModal(header: string, content: string) {
  const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });
  activeModal.componentInstance.modalHeader = header;
  activeModal.componentInstance.modalContent = content;
  return activeModal;
}
reset()
{
  this.cashpaid=null;
  this.cardpaid1=null;
  this.cashpaid1=null;
  this.cardpaid=null;
  this.amount=null;
  this.amount1=null;

}
// selecttrans(event : any)
// {
// console.log(event.value);
// {
//   var de1= <HTMLInputElement>document.getElementById("debt");
//   de1.disabled=true;
//   var dd= <HTMLInputElement>document.getElementById("due-date");
//   dd.disabled=true;
//   var price= <HTMLInputElement>document.getElementById("date");
//   price.disabled=true;
// }
// }
// selecttrans1(event : any)
// {
// console.log(event.value);
// if(event.value=='debt')
// {
//   var cashprice1= <HTMLInputElement>document.getElementById("debt1");
//   cashprice1.disabled=false;
//   var cashprice2= <HTMLInputElement>document.getElementById("due-date1");
//   cashprice2.disabled=false;
//   var price= <HTMLInputElement>document.getElementById("date1");
//   price.disabled=false;
  
// } else {
//   var cashprice1= <HTMLInputElement>document.getElementById("debt1");
//   cashprice1.disabled=true;
//   var cashprice2= <HTMLInputElement>document.getElementById("due-date1");
//   cashprice2.disabled=true;
//   var price= <HTMLInputElement>document.getElementById("date1");
//   price.disabled=true;
// }
// }


  ngOnDestroy() {
  }
}
