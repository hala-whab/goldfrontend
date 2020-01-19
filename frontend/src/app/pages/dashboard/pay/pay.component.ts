import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile} from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { TBService } from '../../services/tb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDateService } from '@nebular/theme';
import { runInThisContext } from 'vm';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-temperature',
  providers: [TBService],
  styleUrls: ['./pay.component.scss'],
  templateUrl: './pay.component.html',
})
export class payComponent  {
  card_paid:any;
  cash_paid:any;
  remaning: any;
  id :string;
  no_of_grams:any;
  gram_cash_price:any;
  gram_card_price:any;
  cash_weight1:string;
card_weight1:string;
payment1: string;
min: Date;
max: Date;
Duedate: Date;

  constructor(private service: TBService, private router: Router,protected dateService: NbDateService<Date> ,
    private route: ActivatedRoute, private modalservice: NgbModal){
      this.min = this.dateService.addDay(this.dateService.today(), -5);
      this.max = this.dateService.addDay(this.dateService.today(), 5);
    }
    
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.remaning=param.remaning;
      this.gram_card_price=param.gram_card_price;
      this.gram_cash_price=param.gram_cash_price;
      

    });
  }
  typeSelected1(event: any) {
    this.payment1=event;
    console.log(event);
    var cash_weight1= <HTMLInputElement>document.getElementById("cash_weight1");
    cash_weight1.disabled=false;
    var card_weight1= <HTMLInputElement>document.getElementById("card_weight1");
    card_weight1.disabled=false;
    if (this.payment1=="cash"){
      var cash_weight= <HTMLInputElement>document.getElementById("cash_weight1");
      cash_weight.disabled=false;
      var card_weight= <HTMLInputElement>document.getElementById("card_weight1");
      card_weight.disabled=true;
      this.card_weight1='0';
      this.card_paid=0;
    }
    else if (this.payment1=="Card"){
         var cash_weight= <HTMLInputElement>document.getElementById("cash_weight1");
         cash_weight.disabled=true;
         var card_weight= <HTMLInputElement>document.getElementById("card_weight1");
         card_weight.disabled=false;
        this.cash_weight1='0';
        this.cash_paid=0;
       } else if(this.payment1="Card & Cash"){
        var cash_weight= <HTMLInputElement>document.getElementById("cash_weight1");
        cash_weight.disabled=false;
        var card_weight= <HTMLInputElement>document.getElementById("card_weight1");
        card_weight.disabled=false;
         }
        }
  submit()
  {
    if(this.Duedate&&this.card_weight1&&this.cash_weight1&&this.payment1){
    var date=new Date();
   this.remaning=this.remaning-parseFloat(this.card_weight1)-parseFloat(this.cash_weight1);
   this.no_of_grams=parseFloat(this.card_weight1)+parseFloat(this.cash_weight1);
   this.cash_paid=parseFloat(this.cash_weight1)*parseFloat(this.gram_cash_price);
   this.card_paid=parseFloat(this.card_weight1)*parseFloat(this.gram_card_price);
   if(this.remaning<0){
     this.showModal('Error','please enter correct values');
this.cash_weight1=null;
this.card_weight1=null;
this.Duedate=null;
   }else{
   this.service.addNewpaymentCustomer(this.id,this.no_of_grams, (this.cash_paid).toString(),(this.card_paid).toString(),this.remaning,this.Duedate.getTime()).subscribe(()=>this.showModal('payment','done :)'));
  this.service.updatesSaveWhendebtpaid(this.id,this.no_of_grams, (this.cash_paid).toString(),(this.card_paid).toString(),this.remaning,this.Duedate.getTime()).subscribe();
    this.router.navigate(['pages/dashboard/states']);
   
}
  }else {
    this.showModal('Error','Please enter all feilds');
  }
}

  showModal(header: string, content: string) {
    const activeModal = this.modalservice.open(ModalComponent, { size: 'sm', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = header;
    activeModal.componentInstance.modalContent = content;
    return activeModal;
}
}
