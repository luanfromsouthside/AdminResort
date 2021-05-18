import { UpdateVoucherComponent } from './update-voucher/update-voucher.component';
import { DetailsVoucherComponent } from './details-voucher/details-voucher.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { ListVouchersComponent } from './list-vouchers/list-vouchers.component';
import { VoucherComponent } from './voucher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: VoucherComponent,
    children: [
      {
        path: '',
        component: ListVouchersComponent,
      },
      {
        path: 'add',
        component: AddVoucherComponent,
      },
      {
        path: 'details/:id',
        component: DetailsVoucherComponent,
      },
      {
        path: 'update/:id',
        component: UpdateVoucherComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherRoutingModule { }
