import { VoucherService } from './../../../data/voucher.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-voucher',
  templateUrl: './add-voucher.component.html',
})
export class AddVoucherComponent implements OnInit {
  form: FormGroup
  constructor(
    private voucherService: VoucherService,
    private fb: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', [
        Validators.required, 
        Validators.minLength(2),
        Validators.maxLength(10)
      ]],
      fromDate: [new Date(), [
        Validators.required
      ]],
      toDate: ['', [
        Validators.required
      ]],
      condition: ['',[
        Validators.required,
        Validators.min(0),
      ]],
      discount:['',[
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]]
    })
  }

  addVoucher() {
    this.voucherService.addVoucher({
      code: this.getValueFrm('code'),
      fromDate: this.getValueFrm('fromDate'),
      toDate: this.getValueFrm('toDate'),
      condition: this.getValueFrm('condition'),
      discount: this.getValueFrm('discount')
    })
    this.router.navigateByUrl('/home/voucher')
  }

  getValueFrm(ctrl: string) {
    return this.form.get(ctrl).value
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }
}
