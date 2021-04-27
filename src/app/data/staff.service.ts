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
}
