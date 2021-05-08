import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { StaffService } from './../../../data/staff.service';
import { Staff } from './../../../model/staff.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-staff',
  templateUrl: './add.component.html',
})
export class AddStaffComponent implements OnInit {
  formAddStaff: FormGroup;
  listRoles = [
    { value: "Staff", name: "Nhân viên"},
    { value: "Admin", name: "Quản lý"},
    { value: "Warehouse", name: "Nhân viên kho"},
    { value: "Manager", name: "Quản lý"}
  ]
  constructor(
    private readonly staffService:StaffService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formAddStaff = this.fb.group({
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
      permission: ['', [Validators.required]],
    })
  }

  addStaff() {
    console.log(this.formAddStaff.value)

  }

  resetForm(event) {
    event.preventDefault();
    this.formAddStaff.reset()
  }
}
