import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { NbAuthGuard } from './auth-guard.service';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  {
    path: 'pages',
     canActivate: [NbAuthGuard],
    loadChildren: 'app/pages/pages.module#PagesModule',
  }
  ,
  {
    path: 'redirect',
    canActivate: [NbAuthGuard], // here we tell Angular to check the access with our AuthGuard
    component: RedirectComponent,
  }
  ,
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
