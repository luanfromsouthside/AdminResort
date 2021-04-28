import { PermissionPipe } from './../../pipe/permission.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { 
  NbActionsModule, 
  NbAlertModule, 
  NbButtonModule, 
  NbCardModule,
  NbDatepickerModule,
  NbIconModule, 
  NbInputModule, 
  NbRadioModule, 
  NbSelectModule,
  NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { DetailStaffComponent } from './detail-staff/detail-staff.component';
import { DialogModule } from '../../dialog/dialog.module';
import { UpdateStaffComponent } from './update-staff/update-staff.component';


@NgModule({
  declarations: [
    StaffComponent,
    ListStaffComponent,
    AddStaffComponent,
    DetailStaffComponent, 
    UpdateStaffComponent,
    PermissionPipe
    ],
  imports: [
    CommonModule,
    StaffRoutingModule,
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
  ]
})
export class StaffModule { }
