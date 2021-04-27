import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbTreeGridModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';


@NgModule({
  declarations: [RoomComponent, RoomManagementComponent, AddRoomComponent, EditRoomComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    NbTreeGridModule,
    NbCardModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbInputModule
  ]
})
export class RoomModule { }
