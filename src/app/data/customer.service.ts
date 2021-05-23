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
    return this.http.get<Customer>(this.Root_URL)
  }

  getByID(id: string):Observable<Customer>{
    return this.http.get<Customer>(this.Root_URL + `/${id}`)
  }

  addCustomer(Customer: Customer) {
    this.http.post(this.Root_URL + '/create', Customer)
  }

  get SrcDataTable() {
    return new ServerDataSource(this.http, { endPoint: this.Root_URL })
  }

  // removeCustomer(CustomerID: string) {
  //   CustomerData.forEach((item,index) => {
  //     if(item.id === CustomerID) delete CustomerData[index];
  //   })
  // }

  // updateCustomer(Customer: Customer) {
  //   CustomerData.forEach((item,index) => {
  //     if(item.id === Customer.id) {
  //       item.name = Customer.name;
  //       item.gender = Customer.gender;
  //       item.birth = Customer.birth;
  //       item.phone = Customer.phone;
  //       item.password = Customer.password;
  //     }
  //   })
  // }

  // search(key: string) {
  //   return CustomerData.filter(cus => cus.name.includes(key))
  // }
}
