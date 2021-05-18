import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplyRoutingModule } from './supply-routing.module';
import { SupplyComponent } from './supply.component';
import { ListSuppliesComponent } from './list-supplies/list-supplies.component';
import { DetailsSupplyComponent } from './details-supply/details-supply.component';
import { UpdateSupplyComponent } from './update-supply/update-supply.component';
import { AddSupplyComponent } from './add-supply/add-supply.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule, NbActionsModule, NbUserModule, NbSelectModule, NbRadioModule, NbDatepickerModule, NbAlertModule, NbListModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { DialogModule } from '../../dialog/dialog.module';


@NgModule({
  declarations: [SupplyComponent, ListSuppliesComponent, DetailsSupplyComponent, UpdateSupplyComponent, AddSupplyComponent],
  imports: [
    CommonModule,
    SupplyRoutingModule,
    NbCardModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbSelectModule,
    NbRadioModule,
    NbDatepickerModule,
    DialogModule,
    NbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    ThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
  ]
})
export class SupplyModule { }
