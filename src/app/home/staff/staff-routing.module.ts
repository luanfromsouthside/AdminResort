
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffComponent } from './staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailStaffComponent } from './detail-staff/detail-staff.component';

const routes: Routes = [
  {
    path: '',
    component: StaffComponent,
    children: [
      {
        path:'',
        component: ListStaffComponent
      },
      {
        path: 'add',
        component: AddStaffComponent
      },
      {
        path: 'detail/:id',
        component: DetailStaffComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
