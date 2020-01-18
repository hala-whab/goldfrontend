
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbCardModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';

import { ThemeModule } from '../@theme/theme.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbCardModule,
    NbAuthModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class AuthModule {
}
