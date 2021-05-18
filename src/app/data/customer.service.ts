import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { map } from 'rxjs/operators';
import { CustomerData } from './mock-data/Customer-data';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  get ListCustomer() {
    return of<Customer[]>(CustomerData)
  }

  getByID(id: string):Observable<Customer>{
    return this.ListCustomer.pipe(map(Customer => Customer.find(u => u.id == id)));
  }

  addCustomer(Customer: Customer) {
    CustomerData.push(Customer);
  }

  removeCustomer(CustomerID: string) {
    CustomerData.forEach((item,index) => {
      if(item.id === CustomerID) delete CustomerData[index];
    })
  }

  updateCustomer(Customer: Customer) {
    CustomerData.forEach((item,index) => {
      if(item.id === Customer.id) {
        item.name = Customer.name;
        item.gender = Customer.gender;
        item.birth = Customer.birth;
        item.phone = Customer.phone;
        item.password = Customer.password;
      }
    })
  }

  search(key: string) {
    return CustomerData.filter(cus => cus.name.includes(key))
  }
}
