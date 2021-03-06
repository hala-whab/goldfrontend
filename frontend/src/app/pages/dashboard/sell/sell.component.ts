import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbDateService } from '@nebular/theme';
import { TBService } from '../../services/tb.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'ngx-sell',
  providers: [TBService],
  styleUrls: ['./sell.component.scss'],
  templateUrl: './sell.component.html',
})
export class SellComponent implements OnDestroy {

currentTheme: string;
themeSubscription: any;
select_id:HTMLSelectElement ; 
payment: string;
Gram_Type : string;
Details:string;
weight:string;
cashprice:string;
cardprice:string;
cash_weight:string;
card_weight:string;
payment1: string;
Gram_Type1 : string;
Details1:string;
weight1:string;
cashprice1:string;
cardprice1:string;
Rcashprice1:string;
Rcardprice1:string;
cash_weight1:string;
card_weight1:string;
The_Remaing_weight :string;
Balance_Payment :string;
Customer_Number: string;
cashpriceelement: any; 

  min: Date;
  max: Date;
 Duedate: Date;
  constructor(private themeService: NbThemeService,private service: TBService, protected dateService: NbDateService<Date>, private modalService: NgbModal) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;

    });
      this.min = this.dateService.addDay(this.dateService.today(), -5);
      this.max = this.dateService.addDay(this.dateService.today(), 5);
    

  }

  gramtype(event: any) {
    this.Gram_Type=event;
    console.log(this.Gram_Type)
    }

  gramtype1(event: any) {
    this.Gram_Type1=event;
    console.log(this.Gram_Type1)
    }
typeSelected(event: any) {
  this.payment=event;
  console.log(event);
  var cashprice= <HTMLInputElement>document.getElementById("cashprice");
  cashprice.disabled=false;
  var cardprice= <HTMLInputElement>document.getElementById("cardprice");
  cardprice.disabled=false;
  var cash_weight= <HTMLInputElement>document.getElementById("cash_weight");
  cash_weight.disabled=false;
  var card_weight= <HTMLInputElement>document.getElementById("card_weight");
  card_weight.disabled=false;
  if (this.payment=="cash"){
 var cashprice= <HTMLInputElement>document.getElementById("cashprice");
    cashprice.disabled=false;
    var cardprice= <HTMLInputElement>document.getElementById("cardprice");
    cardprice.disabled=true;
    var cash_weight= <HTMLInputElement>document.getElementById("cash_weight");
    cash_weight.disabled=false;
    var card_weight= <HTMLInputElement>document.getElementById("card_weight");
    card_weight.disabled=true;
    this.cardprice='0';
    this.cash_weight='0';
    this.card_weight='0';
  }
  else if (this.payment=="Card"){
    var cardprice= <HTMLInputElement>document.getElementById("cardprice");
       cardprice.disabled=false;
       var cashprice= <HTMLInputElement>document.getElementById("cashprice");
       cashprice.disabled=true;
       var cash_weight= <HTMLInputElement>document.getElementById("cash_weight");
       cash_weight.disabled=true;
       var card_weight= <HTMLInputElement>document.getElementById("card_weight");
       card_weight.disabled=false;
       this.cashprice='0';
       this.cash_weight='0';
       this.card_weight='0';
     } else if(this.payment="Card & Cash"){
      var cashprice= <HTMLInputElement>document.getElementById("cashprice");
      cashprice.disabled=false;
      var cardprice= <HTMLInputElement>document.getElementById("cardprice");
      cardprice.disabled=false;
      var cash_weight= <HTMLInputElement>document.getElementById("cash_weight");
      cash_weight.disabled=false;
      var card_weight= <HTMLInputElement>document.getElementById("card_weight");
      card_weight.disabled=false;
       }
}
typeSelected1(event: any) {
  this.payment1=event;
  console.log(event);
  var cashprice1= <HTMLInputElement>document.getElementById("cashprice1");
  cashprice1.disabled=false;
  var cardprice1= <HTMLInputElement>document.getElementById("cardprice1");
  cardprice1.disabled=false;
  var cash_weight1= <HTMLInputElement>document.getElementById("cash_weight1");
  cash_weight1.disabled=false;
  var card_weight1= <HTMLInputElement>document.getElementById("card_weight1");
  card_weight1.disabled=false;
  if (this.payment1=="cash"){
 var cashprice= <HTMLInputElement>document.getElementById("cashprice1");
    cashprice.disabled=false;
    var cardprice= <HTMLInputElement>document.getElementById("cardprice1");
    cardprice.disabled=true;
    var cash_weight= <HTMLInputElement>document.getElementById("cash_weight1");
    cash_weight.disabled=false;
    var card_weight= <HTMLInputElement>document.getElementById("card_weight1");
    card_weight.disabled=true;
    this.cardprice1='0';
    this.cash_weight1='0';
    this.card_weight1='0';
  }
  else if (this.payment1=="Card"){
    var cardprice= <HTMLInputElement>document.getElementById("cardprice1");
       cardprice.disabled=false;
       var cashprice= <HTMLInputElement>document.getElementById("cashprice1");
       cashprice.disabled=true;
       var cash_weight= <HTMLInputElement>document.getElementById("cash_weight1");
       cash_weight.disabled=true;
       var card_weight= <HTMLInputElement>document.getElementById("card_weight1");
       card_weight.disabled=false;
       this.cashprice1='0';
       this.cash_weight1='0';
       this.card_weight1='0';
     } else if(this.payment1="Card & Cash"){
      var cashprice= <HTMLInputElement>document.getElementById("cashprice1");
      cashprice.disabled=false;
      var cardprice= <HTMLInputElement>document.getElementById("cardprice1");
      cardprice.disabled=false;
      var cash_weight= <HTMLInputElement>document.getElementById("cash_weight1");
      cash_weight.disabled=false;
      var card_weight= <HTMLInputElement>document.getElementById("card_weight1");
      card_weight.disabled=false;
       }
}
submitD(){

  
  if(this.payment && this.weight&&this.Gram_Type &&this.card_weight&&this.cash_weight&&this.cashprice&&this.cardprice&&this.Details){

this.service.Dsell(this.Gram_Type,this.Details,this.weight,this.payment,this.cardprice,this.cashprice,this.card_weight,this.card_weight).subscribe(()=>this.showModal('Direct sell','okay'),()=>this.showModal('Direct Sell','Something went Wrong'));
this.service.updatesSaveWhenDirctsell(this.Gram_Type,this.Details,this.weight,this.payment,this.cardprice,this.cashprice,this.card_weight,this.card_weight).subscribe();
}else {
  this.showModal('Error','please enter all fields');
}
}
showModal(header: string, content: string) {
  const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });
  activeModal.componentInstance.modalHeader = header;
  activeModal.componentInstance.modalContent = content;
  return activeModal;
}
RemaningSelected(){

  var x=true;
  if(this.payment1 && this.weight1&&this.Gram_Type1&& this.Duedate&&this.card_weight1&&this.cash_weight1&&this.Details1&&this.Customer_Number&&this.Rcardprice1&&this.Rcashprice1&&this.cashprice1&&this.cardprice1){
if(this.payment1="Card & Cash"){
    if((parseFloat(this.card_weight1)+parseFloat(this.cash_weight1))>parseFloat(this.weight1))
    {
    console.log("am here");
    this.showModal('Error','No of grams paid cash + No of grams paid with card greater than the total wwight bought')
    this.card_weight1=null;
    this.cash_weight1=null;
    x=false;
    }
  }
if(x==true){
  this.The_Remaing_weight=(parseFloat(this.weight1)-parseFloat(this.card_weight1)-parseFloat(this.cash_weight1)).toString();


  this.service.Dsell(this.Gram_Type1,this.Details1,this.weight1,this.payment1,this.cardprice1,this.cashprice1,this.card_weight1,this.card_weight1).subscribe(()=>this.showModal('Update Save','okay'),()=>this.showModal('Update Save','Something went Wrong'));
this.service.debt(this.Customer_Number,this.The_Remaing_weight,this.Rcashprice1,this.Rcardprice1,this.weight1,this.Duedate.getTime()).subscribe();
this.service.updatesSaveWhenDebtSell(this.Gram_Type1,this.The_Remaing_weight,this.payment1,this.card_weight1,this.weight1,this.cash_weight1,this.cashprice1,this.cardprice1).subscribe();
this.reset();
  }
    }else{
      this.showModal('Error','please enter all data');
    }
  }
  reset()
  {
    this.payment=null;
this.Gram_Type =null;
this.Details=null;
this.weight=null;
this.cashprice=null;
this.cardprice=null;
this.cash_weight=null;
this.card_weight=null;
this.payment1=null;
this.Gram_Type1 =null;
this.Details1=null;
this.weight1=null;
this.cashprice1=null;
this.cardprice1=null;
this.Rcashprice1=null;
this.Rcardprice1=null;
this.cash_weight1=null;
this.card_weight1=null;
this.The_Remaing_weight =null;
this.Balance_Payment =null;
this.Customer_Number=null;
  }


  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
 