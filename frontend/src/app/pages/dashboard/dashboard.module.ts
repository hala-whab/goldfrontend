import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {CustomerdebtComponent} from './Customerdebt/Customerdebt.component';
import { checkCustomerDetailsComponent } from './checkCustomerDetails/checkCustomerDetails.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { AddCustomerComponent } from './Add-Customer/AddCustomer.component';
import { SellComponent } from './sell/sell.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import {checkTransComponent } from './checkTrans/checkTrans.component';
import { checkAllTransComponent } from './checkAllTrans/checkAllTrans.component';
import { BuyComponent } from './buy/buy.component';
import { PlayerComponent } from './rooms/player/player.component';
import {checkSaveComponent} from './checkSave/checkSave.component';
import { FormsModule } from '@angular/forms';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {payComponent} from './pay/pay.component';
import {HardCurrancyComponent} from './Hard currency/Hard-Currancy.component';
import {ExpensivesComponent} from './Expensives/Expensives.component';
import {DatepickerComponent} from '../forms/datepicker/datepicker.component';
import {creditComponent} from './credit/credit.component';
import {specificcustomertransComponent} from './specificcustomertrans/specificcustomertrans.component';
import { StatesComponent } from './states/states.component';
import {checkloanTransComponent} from './checkloanTrans/checkloanTrans.component';
import {CustomerwantFromyouComponent} from './CustomerwantFromyou/CustomerwantFromyou.component';
import {paytocustomerComponent} from './paytocustomer/paytocustomer.component';
import {HDComponent} from './HD/HD.component';
import {AddHardCurrencyComponent} from './AddHardCurrency/AddHardCurrency.component';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button'
import {PaginatorModule} from 'primeng/paginator';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbDatepickerModule,
    NbUserModule,
    NbButtonModule,
    FilterPipeModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    DashboardRoutingModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    paytocustomerComponent,
    CustomerdebtComponent,
    specificcustomertransComponent,
    StatesComponent,
    creditComponent,
   HDComponent,
   AddHardCurrencyComponent,
    checkCustomerDetailsComponent,
    RoomSelectorComponent,
    AddCustomerComponent,
    CustomerwantFromyouComponent,
    DatepickerComponent,
    RoomsComponent,
    payComponent,
    checkloanTransComponent,
    SellComponent,
    ExpensivesComponent,
    paytocustomerComponent,
    HardCurrancyComponent,
    SecurityCamerasComponent,
    checkTransComponent,
   checkAllTransComponent,
    checkSaveComponent,
    PlayerComponent,
   BuyComponent,
   CustomerdebtComponent,
  
  ],
})
export class DashboardModule { }
