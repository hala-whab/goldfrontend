import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {AddCustomerComponent} from './dashboard/Add-Customer/AddCustomer.component';
import {checkCustomerDetailsComponent} from './dashboard/checkCustomerDetails/checkCustomerDetails.component';
import {checkTransComponent} from './dashboard/checkTrans/checkTrans.component';
import {checkSaveComponent} from './dashboard/checkSave/checkSave.component';
import { BuyComponent } from './dashboard/buy/buy.component';
import { checkAllTransComponent } from './dashboard/checkAllTrans/checkAllTrans.component';
import { SellComponent } from './dashboard/sell/sell.component';
import {CustomerdebtComponent} from './dashboard/Customerdebt/Customerdebt.component';
import {payComponent} from './dashboard/pay/pay.component';
import {HardCurrancyComponent} from './dashboard/Hard currency/Hard-Currancy.component';
import {ExpensivesComponent} from './dashboard/Expensives/Expensives.component';
import{creditComponent} from './dashboard/credit/credit.component';
import { specificcustomertransComponent } from './dashboard/specificcustomertrans/specificcustomertrans.component';
import { RauthService } from '../rauth.service';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      canActivate: [RauthService],
      data: {
         expectedRole: ['ROLE_USER'],
       },
      loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
    },
    {
      path: 'iot-dashboard',
      canActivate: [RauthService],
      data: {
        expectedRole: ['ROLE_USER'],
      },
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },

    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
