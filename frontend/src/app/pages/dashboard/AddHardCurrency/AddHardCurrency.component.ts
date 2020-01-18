import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile, } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { TBService } from '../../services/tb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-AddHardCurrency',
  providers: [TBService],
  styleUrls: ['./AddHardCurrency.component.scss'],
  templateUrl: './AddHardCurrency.component.html',
})
export class AddHardCurrencyComponent  {
  type:string;
  country:string;
  constructor(private service: TBService,private router: Router,){}

  submit()
  {
this.service.addHD(this.type,this.country).subscribe(()=> {window.alert('Added'), this.router.navigate(['pages/dashboard/states']);},()=>window.alert("please enter all feilds,or there ma be another customer with the same phone number"));
  }
}
