import { HttpClient } from '@angular/common/http';
import { BaseEndpoint } from './base-endpoint.api';
import { Supply } from './../model/supply.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplyService extends BaseEndpoint{

  constructor(private http: HttpClient) {
    super('Supply')
  }

  get List() {
    return this.http.get<Supply[]>(this.Root_URL)
  }

  getByID(id: string) {
    return this.http.get<Supply>(this.Root_URL + id)
  }

  addSupply(Supply: Supply) {
    return this.http.post(this.Root_URL + 'create', Supply, { responseType: 'text' })
  }

  removeSupply(SupplyID: string) {
    return this.http.delete(this.Root_URL + SupplyID, { responseType: 'text' })
  }

  updateSupply(model: {id:string, name:string, editType: string, count: number}) {
    return this.http.post(this.Root_URL + 'edit', model, { responseType: 'text' })
  }
}
