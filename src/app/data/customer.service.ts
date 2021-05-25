import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { BaseEndpoint } from './base-endpoint.api';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseEndpoint {

  constructor(private http: HttpClient) {
    super('Customer')
  }
  get ListCustomer() {
    return this.http.get<Customer[]>(this.Root_URL)
  }

  getByID(id: string):Observable<Customer>{
    return this.http.get<Customer>(this.Root_URL + id)
  }

  addCustomer(Customer: Customer) {
    //console.log(Customer)
    return this.http.post(this.Root_URL + 'create', Customer, {responseType: 'text'})
  }

  updateCustomer(customer: Customer) {
    return this.http.post(this.Root_URL + 'update', customer, {responseType: 'text'})
  }

  deleteCustomer(id: string) {
    return this.http.delete(this.Root_URL + id, { responseType: 'text' })
  }
}
