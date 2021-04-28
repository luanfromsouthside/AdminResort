import { DialogResultComponent } from './../../../dialog/dialog-result/dialog-result.component';
import { NbDialogService } from '@nebular/theme';
import { StaffService } from './../../../data/staff.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from '../../../model/staff.model';
import { filter, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.scss']
})
export class UpdateStaffComponent implements OnInit {
  frUpdateStaff: FormGroup;
  staff$: Observable<Staff>;
  constructor(
    private fb: FormBuilder,
    private readonly staffService: StaffService,
    private readonly route: ActivatedRoute,
    private readonly dialog: NbDialogService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.staff$ = this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.staffService.getByID(id)),
      filter(staff => !!staff)
    )
    this.staff$.subscribe(s => {
      this.frUpdateStaff = this.fb.group({
        name: [s.name, [
          Validators.required,
          Validators.maxLength(50)
        ]],
        password: [s.password, [
          Validators.required, 
          Validators.minLength(6),
          Validators.maxLength(20)
        ]],
        phone: [s.phone, [
          Validators.required,
          Validators.pattern(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/)
        ]],
        gender: [s.gender, [Validators.required]],
        birth: [s.birth, [Validators.required]],
        permission: [s.permission, [Validators.required]],
      })
    })
  }

  resetForm() {
    this.frUpdateStaff.reset();
  }

  onSubmit(id: string) {
    this.dialog.open(DialogResultComponent,{
      context: {
        title: `Cập nhật nhân viên ${id}?`
      }
    }).onClose.subscribe(result => {
      if(result) {
        this.update();
        this.router.navigateByUrl('/home/staff');
      }
    })
  }

  update() {
    this.staff$.subscribe(s => {
      s.name = this.frUpdateStaff.get('name').value;
      s.birth = this.frUpdateStaff.get('birth').value;
      s.password = this.frUpdateStaff.get('password').value;
      s.phone = this.frUpdateStaff.get('phone').value;
      s.gender = this.frUpdateStaff.get('gender').value;
      s.permission = this.frUpdateStaff.get('permission').value;
      this.staffService.updateStaff(s);
    })
  }
}
