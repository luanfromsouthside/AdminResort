import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbActionsModule, NbAlertModule, NbButtonModule, NbDatepickerModule, NbLayoutModule, NbListModule, NbRadioModule, NbSelectModule, NbSidebarModule, NbUserModule, NbProgressBarModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { DialogModule } from '../../dialog/dialog.module';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { ImageRoomComponent } from './image-room/image-room.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [RoomComponent, RoomManagementComponent, AddRoomComponent, EditRoomComponent, RoomTypeComponent, RoomDetailComponent, ImageRoomComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
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
    NbProgressBarModule,
    NgxDropzoneModule,
    NgxGalleryModule
  ]
})
export class RoomModule { }
