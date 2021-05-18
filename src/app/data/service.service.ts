import { Injectable } from '@angular/core';
import { Service } from '../model/service.model';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  ServiceData: Service[] = [
    {
      id:'SPA',
      name: 'Spa thư giãn',
      description: 'demo',
      price: 450000
    },
    {
      id:'GYM',
      name: 'Thể hình',
      description: 'Dịch vụ thể hình',
      price: 649000
    },
    {
      id:'RESTAURANT',
      name: 'Nhà hàng',
      description: 'Chất lượng 5*, đầu bếp Mỹ',
      price: 1150000
    },
    {
      id:'YOGA',
      name: 'Dịch vụ yoga',
      description: 'YOGA fitness for customer',
      price: 950000
    }
  ]

  constructor() { }

  get List() {
    return of<Service[]>(this.ServiceData)
  }

  getByID(id: string):Observable<Service>{
    return this.List.pipe(map(service => service.find(s => s.id === id)))
  }

  addService(Service: Service) {
    return this.ServiceData.push(Service)
  }

  removeService(ServiceID: string) {
    this.ServiceData.forEach((item,index) => {
      if(item.id === ServiceID) delete this.ServiceData[index];
    })
  }

  updateService(service: Service) {
    this.ServiceData.forEach((item) => {
      if(item.id === service.id) {
        item.name = service.name;
        item.description = service.description;
        item.price = service.price;
      }
    })
  }
}
