import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from './../../../model/staff.model';
import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../data/staff.service';
import { pluck, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'ngx-detail-staff',
  templateUrl: './detail-staff.component.html',
  styleUrls: ['./detail-staff.component.scss']
})
export class DetailStaffComponent implements OnInit {
  staff$: Observable<Staff>;
  constructor(private route: ActivatedRoute, private staffService: StaffService) { }

  ngOnInit(): void {
    this.staff$ = this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.staffService.getByID(id)),
      filter(staff => !!staff)
    )
    console.log(this.staff$)
  }

}
