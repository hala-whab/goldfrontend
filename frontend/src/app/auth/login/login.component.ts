import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { NbLoginComponent, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends NbLoginComponent {

}
