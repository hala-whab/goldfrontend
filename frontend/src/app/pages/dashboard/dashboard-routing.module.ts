import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {AddCustomerComponent} from './Add-Customer/AddCustomer.component';
import {checkCustomerDetailsComponent} from './checkCustomerDetails/checkCustomerDetails.component';
import { RauthService } from '../../rauth.service';
import { checkTransComponent } from './checkTrans/checkTrans.component';
import { BuyComponent } from './buy/buy.component';
import { specificcustomertransComponent } from './specificcustomertrans/specificcustomertrans.component';
import { SellComponent } from './sell/sell.component';
import { creditComponent } from './credit/credit.component';
import { checkAllTransComponent } from './checkAllTrans/checkAllTrans.component';
import { checkSaveComponent } from './checkSave/checkSave.component';
import { CustomerdebtComponent } from './Customerdebt/Customerdebt.component';
import { ExpensivesComponent } from './Expensives/Expensives.component';
import { HardCurrancyComponent } from './Hard currency/Hard-Currancy.component';
import { payComponent } from './pay/pay.component';
import { StatesComponent } from './states/states.component';
import {CustomerwantFromyouComponent}from './CustomerwantFromyou/CustomerwantFromyou.component';
import { checkloanTransComponent } from './checkloanTrans/checkloanTrans.component';
import {paytocustomerComponent} from './paytocustomer/paytocustomer.component';
import { HDComponent } from './HD/HD.component';
import { AddHardCurrencyComponent } from './AddHardCurrency/AddHardCurrency.component';
const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      redirectTo: 'states',
    },
  
  
   {
  path: 'addcustomer',
   canActivate: [RauthService],
   data: {
     expectedRole: ['ROLE_ADMIN','ROLE_USER'],
   },
  component: AddCustomerComponent,
},
{
  path: 'customerdetails',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
  component: checkCustomerDetailsComponent,
},

{
  path: 'states',
   canActivate: [RauthService],
   data: {
     expectedRole: ['ROLE_ADMIN','ROLE_USER'],
   },
  component: StatesComponent,
},
{
  path: 'checktransactions',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
  component: checkTransComponent,
},
{
  path: 'HD',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
  component: HDComponent,
},
{
  path: 'Purchase',
  canActivate: [RauthService],
  data: {
    expectedRole:['ROLE_ADMIN','ROLE_USER'],
  },
  component: BuyComponent,
},

{
  path:'specificcustomertrans/:id',
  canActivate: [RauthService],
  data: {
    expectedRole:['ROLE_ADMIN','ROLE_USER'],
  },
  component:specificcustomertransComponent,
},
{
  path: 'sell',
  canActivate: [RauthService],
  data: {
    expectedRole:['ROLE_ADMIN','ROLE_USER'],
  },
  component: SellComponent,
},
{
  path: 'credit',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
  component: creditComponent,
},
{
  path: 'checkAllTransactions',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
  component: checkAllTransComponent,
},
{
  path: 'checkSave',
  canActivate: [RauthService],
  data: {
    expectedRole:['ROLE_ADMIN','ROLE_USER'],
  },
  component: checkSaveComponent,
},
{
  path: 'customerdebt/:id/:remaning/:gram_card_price/:gram_cash_price',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
 
  component: CustomerdebtComponent,
},

{
  path: 'paydebt/:id/:remaning/:gram_card_price/:gram_cash_price',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
 
  component: CustomerdebtComponent,
},
{
  path: 'Expensives',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
 
  component: ExpensivesComponent,
},
{
  path: 'Hard-Curency/:id',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
 
  component: HardCurrancyComponent,
},


{
  path: 'addHD',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
 
  component: AddHardCurrencyComponent,
},
{
  path: 'debtpaymentdetails/:id/:remaning/:gram_card_price/:gram_cash_price',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
 component: payComponent,
},
{
  path: 'checkloantransactions',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
  component: checkloanTransComponent,
},
{
  path: 'customerwantfromyou/:id/:remaning/:gram_card_price/:gram_cash_price',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
 
  component: CustomerwantFromyouComponent,
},
{
  path: 'loanpaymentdetails/:id/:remaning/:gram_card_price/:gram_cash_price',
  canActivate: [RauthService],
  data: {
    expectedRole: ['ROLE_ADMIN','ROLE_USER'],
  },
 component: paytocustomerComponent,
},
],
}] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
