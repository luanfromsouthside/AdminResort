import { UpdateUsersComponent } from './update-users/update-users.component';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: ListUsersComponent
      },
      {
        path: 'add',
        component: AddUsersComponent
      },
      {
        path: 'details/:id',
        component: DetailUsersComponent
      },
      {
        path: 'update/:id',
        component: UpdateUsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
