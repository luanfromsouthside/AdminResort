import { Router } from '@angular/router';
import { CustomerService } from '../../../data/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-users',
  templateUrl: './add-users.component.html',
})
export class AddUsersComponent implements OnInit {
  formAddUser: FormGroup;
  constructor(
    private readonly customerService: CustomerService,
    private fb: FormBuilder,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      id: ['', [
        Validators.required, 
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      name: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      password: ['', [
        Validators.required, 
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/)
      ]],
      gender: [true, [Validators.required]],
      birth: ['', [Validators.required]],
    })
  }

  addUser() {
    this.customerService.addCustomer({
      id: this.formAddUser.get('id').value,
      name: this.formAddUser.get('name').value,
      birth: this.formAddUser.get('birth').value,
      gender: this.formAddUser.get('gender').value,
      password: this.formAddUser.get('password').value,
      phone: this.formAddUser.get('phone').value
    });
    this.router.navigateByUrl('/home/user')
  }

  resetForm() {
    this.formAddUser.reset()
  }

}
