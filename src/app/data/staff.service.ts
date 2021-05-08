import { map } from 'rxjs/operators';
import { StaffData } from './mock-data/staff-data';
import { Staff } from './../model/staff.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }

  get ListStaff() {
    return of<Staff[]>(StaffData)
  }

  getByID(id: string):Observable<Staff>{
    return this.ListStaff.pipe(map(staff => staff.find(s => s.id == id)));
  }

  addStaff(staff: Staff) {
    StaffData.push(staff);
  }

  removeStaff(staffID: string) {
    StaffData.forEach((item,index) => {
      if(item.id === staffID) delete StaffData[index];
    })
  }

  updateStaff(staff: Staff) {
    StaffData.forEach((item) => {
      if(item.id === staff.id) {
        item.name = staff.name;
        item.gender = staff.gender;
        item.birth = staff.birth;
        item.phone = staff.phone;
        item.password = staff.password;
        item.permission = staff.permission;
      }
    })
  }
}
