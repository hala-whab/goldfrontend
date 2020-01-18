import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile, } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { TBService } from '../../services/tb.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'ngx-temperature',
  providers: [TBService],
  styleUrls: ['./AddCustomer.component.scss'],
  templateUrl: './AddCustomer.component.html',
})
export class AddCustomerComponent  {
  name:string;
  Telphone:string;
  Address: string;
  AnotherTelphone :string;

  constructor(private service: TBService,  private modalService: NgbModal){}

  submit()
  {
    if(this.AnotherTelphone==null){
      this.AnotherTelphone='not entered';
    }
    if(this.Address==null){
      this.Address='not entered';
    }
   this.service.addNewCustomer(this.name,this.Telphone,this.AnotherTelphone,this.Address).subscribe(()=> this.showModal('Customer','Customer Added sucessfult'),()=>this.showModal('Customer','There is another customer with the same phonenumber'));
  this.Address=null;
  this.AnotherTelphone=null;
  this.Telphone=null;
  this.name=null;

  }


  showModal(header: string, content: string) {
    const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = header;
    activeModal.componentInstance.modalContent = content;
    return activeModal;
}




}
