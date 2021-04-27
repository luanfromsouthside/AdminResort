import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogResultComponent } from './dialog-result/dialog-result.component';



@NgModule({
  declarations: [DialogResultComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class DialogModule { }
