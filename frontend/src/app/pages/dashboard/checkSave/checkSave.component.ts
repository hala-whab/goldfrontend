import {  takeWhile } from 'rxjs/operators';
import {  Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { TBService } from '../../services/tb.service';

@Component({
  selector: 'ngx-checkSave',
  providers:[TBService],
  styleUrls: ['./checkSave.component.scss'],
  templateUrl: './checkSave.component.html',
})
export class checkSaveComponent {

  private alive = true;

 save:any[];

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService,private Tbservice:TBService) {
this.Tbservice.getsave().subscribe((save)=>{this.save=save;
console.log(this.save);});

}

}