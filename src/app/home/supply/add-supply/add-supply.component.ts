import { SupplyService } from './../../../data/supply.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-supply',
  templateUrl: './add-supply.component.html',
})
export class AddSupplyComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly supplyService:SupplyService,
    private fb: FormBuilder,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', [
        Validators.required, 
        Validators.minLength(2),
        Validators.maxLength(10)
      ]],
      name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      total: ['', [
        Validators.required,
        Validators.min(1)
      ]]
    })
  }

  addSupply() {
    this.supplyService.addSupply({
      id : this.form.get('id').value,
      name : this.form.get('name').value,
      total : this.form.get('total').value
    })
    this.router.navigateByUrl('/home/supply')
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }
}
