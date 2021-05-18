import { ServiceService } from './../../../data/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-service',
  templateUrl: './add-service.component.html',
})
export class AddServiceComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly ServiceService:ServiceService,
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
      description: ['', [
        Validators.required,
      ]],
      price: ['', [
        Validators.required,
        Validators.min(1)
      ]]
    })
  }

  addService() {
    this.ServiceService.addService({
      id : this.form.get('id').value,
      name : this.form.get('name').value,
      description : this.form.get('description').value,
      price : this.form.get('price').value
    })
    this.router.navigateByUrl('/home/service')
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }
}
