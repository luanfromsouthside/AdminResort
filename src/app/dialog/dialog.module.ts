import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbSelectModule, NbInputModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogResultComponent } from './dialog-result/dialog-result.component';
import { DistributionComponent } from './distribution/distribution.component';



@NgModule({
  declarations: [
    DialogResultComponent,
    DistributionComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    ReactiveFormsModule
  ]
})
export class DialogModule { }
