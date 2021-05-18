import { VoucherService } from './../../../data/voucher.service';
import { Voucher } from './../../../model/voucher.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-update-voucher',
  templateUrl: './update-voucher.component.html',
})
export class UpdateVoucherComponent implements OnInit {
  form: FormGroup
  voucher$: Observable<Voucher>;
  constructor(
    private readonly voucherService: VoucherService,
    private readonly route: ActivatedRoute,
    private readonly dialog: NbDialogService,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.voucher$ = this.voucherService.getByID(id);
    })
    this.voucher$.subscribe(v => {
      this.form = this.fb.group({
        fromDate: [v.fromDate, [
          Validators.required
        ]],
        toDate: [v.toDate, [
          Validators.required
        ]],
        condition: [v.condition,[
          Validators.required,
          Validators.min(0),
        ]],
        discount:[v.discount,[
          Validators.required,
          Validators.min(1),
          Validators.max(100)
        ]]
      })
    })
  }
  updateVoucher() {
    this.voucher$.subscribe((s) => {
      this.dialog.open(DialogResultComponent,{
        context: {
          title: `Cập nhật voucher ${s.code}?`
        }
      }).onClose.subscribe(result => {
        if(result) {
          this.update(s.code);
          this.router.navigateByUrl(`/home/voucher/details/${s.code}`);
        }
      })
    });
  }

  update(code: string) {
      let v: Voucher = {
        code : code,
        condition: this.getValueFrm('condition'),
        discount: this.getValueFrm('discount'),
        fromDate: this.getValueFrm('fromDate'),
        toDate: this.getValueFrm('toDate')
      }
      this.voucherService.updateVoucher(v);
  }

  resetForm() {
    this.voucher$.subscribe(s => {
      this.setValueFrm('condition',s.condition),
      this.setValueFrm('discount',s.discount),
      this.setValueFrm('fromDate',s.fromDate),
      this.setValueFrm('toDate',s.toDate)
    })
  }

  getValueFrm(ctrl: string) {
    return this.form.get(ctrl).value
  }

  setValueFrm(ctrl:string, value:any) {
    this.form.get(ctrl).setValue(value)
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }
}
