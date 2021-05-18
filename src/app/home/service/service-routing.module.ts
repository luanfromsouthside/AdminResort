import { UpdateServiceComponent } from './update-service/update-service.component';
import { DetailServiceComponent } from './detail-service/detail-service.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceComponent,
    children: [
      {
        path:'',
        component: ListServiceComponent
      },
      {
        path: 'add',
        component: AddServiceComponent
      },
      {
        path: 'details/:id',
        component: DetailServiceComponent
      },
      {
        path: 'update/:id',
        component: UpdateServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
