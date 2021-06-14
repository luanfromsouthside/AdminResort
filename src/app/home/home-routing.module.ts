import { NotFound404Component } from './not-found404/not-found404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  children: [
    {
      path: 'booking',
      loadChildren: () => import('./booking/booking.module')
        .then(m => m.BookingModule)
    },
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
      loadChildren: () => import('./service/service.module')
      .then(m => m.ServiceModule)
    },
    {
      path: 'supply',
      loadChildren: () => import('./supply/supply.module')
      .then(m => m.SupplyModule)
    },
    {
      path: 'voucher',
      loadChildren: () => import('./voucher/voucher.module')
      .then(m => m.VoucherModule)
    },
    { path: '', redirectTo: 'room', pathMatch: 'full'},
    { path: '**', component: NotFound404Component }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
