import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { StaffService } from './../../../data/staff.service';
import { Staff } from './../../../model/staff.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-staff',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddStaffComponent implements OnInit {
  formAddStaff: FormGroup;
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
      permission: ['Staff', [Validators.required]],
    })
  }

  onSubmit() {
    console.log(this.formAddStaff.value)
    console.log(this.formAddStaff.get('phone').errors)
  }

  resetForm(event) {
    event.preventDefault();
    this.formAddStaff.reset()
  }
}
