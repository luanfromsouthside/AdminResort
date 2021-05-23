import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { BaseEndpoint } from './base-endpoint.api';
import { map } from 'rxjs/operators';
import { Staff } from './../model/staff.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService extends BaseEndpoint {

  constructor(private http: HttpClient) {
    super('Staff');
  }

  get SrcDataTable() {
    return new ServerDataSource(this.http, { endPoint: this.Root_URL })
  }

  get ListStaff() {
    return this.http.get(this.Root_URL)
  }

  getByID(id: string) {
    return this.http.get<Staff>(this.Root_URL + id)
  }

  addStaff(staff: Staff) {
    return this.http.post(this.Root_URL + 'add', staff, { responseType: 'text' })
  }

  updateStaff(staff: Staff) {
    return this.http.post(this.Root_URL +'update', staff, { responseType: 'text' })
  }

  removeStaff(id: string) {
    return this.http.delete(this.Root_URL + id, { responseType: 'text' })
  }
}
