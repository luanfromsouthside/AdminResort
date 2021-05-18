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
        path:'management',
        component: RoomManagementComponent
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
        path:'roomtype',
        component: RoomTypeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'management'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
