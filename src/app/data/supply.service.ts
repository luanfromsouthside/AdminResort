import { Supply } from './../model/supply.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  SuppliesData : Supply[] = [
    {
      id: 'TV',
      name: 'Tivi',
      total: 45
    },
    {
      id: 'BED',
      name: 'Tivi',
      total: 45
    },
    {
      id: 'KINGBED',
      name: 'Tivi',
      total: 45
    },
    {
      id: 'TABLET',
      name: 'Tivi',
      total: 45
    },
    {
      id: 'PHONE',
      name: 'Tivi',
      total: 45
    },
  ]
  constructor() { }

  get List() {
    return of<Supply[]>(this.SuppliesData)
  }

  getByID(id: string):Observable<Supply>{
    return this.List.pipe(map(Supply => Supply.find(s => s.id === id)))
  }

  addSupply(Supply: Supply) {
    return this.SuppliesData.push(Supply)
  }

  removeSupply(SupplyID: string) {
    this.SuppliesData.forEach((item,index) => {
      if(item.id === SupplyID) delete this.SuppliesData[index];
    })
  }

  updateSupply(supply: Supply, type: string) {
    this.SuppliesData.forEach((item) => {
      if(item.id === supply.id) {
        item.name = supply.name
        if(type == 'add') item.total += supply.total
        if(type == 'new') item.total = supply.total
      }
    })
  }
}
