import { ImageRoomComponent } from './image-room/image-room.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { RoomComponent } from './room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';

const routes: Routes = [
  {
    path:'',
    component: RoomComponent,
    children: [
      {
        path:'',
        component: RoomManagementComponent
      },
      {
        path: 'details/:id',
        component: RoomDetailComponent
      },
      {
        path:'add',
        component: AddRoomComponent
      },
      {
        path:'edit/:id',
        component: EditRoomComponent
      },
      {
        path:'img/:id',
        component: ImageRoomComponent
      },
      {
        path:'room-type',
        component: RoomTypeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
