import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  children: [
    {
      path: 'room',
      loadChildren: () => import('./room/room.module')
        .then(m => m.RoomModule)
    },
    {
      path: 'staff',
      loadChildren: () => import('./staff/staff.module')
        .then(m => m.StaffModule)
    },
    {
      path: 'user',
      loadChildren: () => import('./users/users.module')
      .then(m => m.UsersModule)
    },
    {
      path: 'service',
      loadChildren: () => import('./services/services.module')
      .then(m => m.ServicesModule)
    },
    { path: '', redirectTo: 'room', pathMatch: 'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
