import { delay } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService, NbDateService } from '@nebular/theme';
import { TBService } from '../../services/tb.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Parser } from '@angular/compiler';



@Component({
  selector: 'ngx-buy',
  providers: [TBService],
  styleUrls: ['./buy.component.scss'],
  templateUrl: 'buy.component.html',
})
export class BuyComponent implements  OnDestroy {

  
option: any = {};
  themeSubscription: any;
  min: Date;
  max: Date;
  Duedate: Date;
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
currentTheme: string;

  constructor(private theme: NbThemeService,protected dateService: NbDateService<Date>,private service: TBService,  private modalService: NgbModal) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;

    });
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(),  5);
  }

  gramtype(event: any) {
    this.Gram_Type=event;
    console.log(this.Gram_Type)
    }

  gramtype1(event: any) {
    this.Gram_Type1=event;
    console.log(this.Gram_Type)
    }
    cash(){
      if( parseFloat(this.cash_weight) > parseFloat(this.weight)){
        this.showModal('Error','You have entered a wrong value for number of grams paid cash');
        this.cash_weight=null;
        this.card_weight=null;
      }else{
        this.card_weight=(parseFloat(this.weight)-parseFloat(this.cash_weight)).toString();
      }
    }
    card(){
      if( parseFloat(this.card_weight) > parseFloat(this.weight)){
        this.showModal('Error','You have entered a wrong value for number of grams paid cash');
        this.cash_weight=null;
        this.card_weight=null;
      }else{
        this.cash_weight=(parseFloat(this.weight)-parseFloat(this.card_weight)).toString();
      }
    }


    cash1(){
      if( parseFloat(this.cash_weight1) > parseFloat(this.weight1)){
        this.showModal('Error','You have entered a wrong value for number of grams paid cash');
        this.cash_weight1=null;
        this.card_weight1=null;
      }
    }
    card1(){
      if( parseFloat(this.card_weight1) > parseFloat(this.weight1)){
        this.showModal('Error','You have entered a wrong value for number of grams paid cash');
        this.cash_weight1=null;
        this.card_weight1=null;
      }
    }

    Remaing()
    {
      
        this.The_Remaing_weight=(parseFloat(this.weight1)-parseFloat(this.card_weight1)-parseFloat(this.cash_weight1)).toString();
      
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
        cash_weight.disabled=true;
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
           card_weight.disabled=true;
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

    this.service.Dpurchase(this.Gram_Type,this.Details,this.weight,this.payment,this.cardprice,this.cashprice,this.card_weight,this.card_weight).subscribe(()=>this.showModal('Buy','Okay'));
  this.service.updatesSaveWhenDerctbuy(this.Gram_Type,this.Details,this.weight,this.payment,this.cardprice,this.cashprice,this.card_weight,this.card_weight).subscribe(); 
this.reset();
}else{
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
      if(this.payment1 && this.weight1&&this.Gram_Type1 && this.Duedate&&this.card_weight1&&this.cash_weight1&&this.Details1&&this.Customer_Number&&this.Rcardprice1&&this.Rcashprice1&&this.cashprice1&&this.cardprice1){
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
    this.service.Dpurchase(this.Gram_Type1,this.Details1,this.weight1,this.payment1,this.cardprice1,this.cashprice1,this.card_weight1,this.card_weight1).subscribe();
    console.log("card   "+this.cardprice1);
    
    console.log("this.The_Remaing_weight "+this.The_Remaing_weight);
    this.service.debtpurchase(this.Customer_Number,this.The_Remaing_weight,this.Rcashprice1,this.Rcardprice1,this.weight1,this.Duedate.getTime()).subscribe(()=>this.showModal('Buy','Okay'));
    this.service.updatesSaveWhenDebtpurshace(this.Gram_Type1,this.The_Remaing_weight,this.payment1,this.card_weight1,this.weight1,this.cash_weight1,this.cashprice1,this.cardprice1).subscribe();
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
  }
}
