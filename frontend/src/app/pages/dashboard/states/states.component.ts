import { Component, OnInit } from '@angular/core';
import { TBService } from '../../services/tb.service';

@Component({
  selector: 'ngx-states',
  providers: [TBService],
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'] ,
})
export class StatesComponent implements OnInit {

  constructor(private service: TBService ) { }

  ngOnInit() {


  }

  onClick() {
    window.open('files', '_blank');
  }
}
