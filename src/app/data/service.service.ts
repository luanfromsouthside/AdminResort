import { HttpClient } from '@angular/common/http';
import { BaseEndpoint } from './base-endpoint.api';
import { Injectable } from '@angular/core';
import { Service } from '../model/service.model';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { id } from '@swimlane/ngx-charts';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BaseEndpoint{

  constructor(private http: HttpClient) {
    super('Service')
  }

  get List() {
    return this.http.get<Service[]>(this.Root_URL)
  }

  getByID(id: string):Observable<Service>{
    return this.http.get<Service>(this.Root_URL + id)
  }

  addService(Service: Service) {
    return this.http.post(this.Root_URL + 'create', Service, { responseType: 'text'})
  }

  removeService(ServiceID: string) {
    return this.http.delete(this.Root_URL + id, {responseType:'text'})
  }

  updateService(service: Service) {
    return this.http.post(this.Root_URL + 'edit', service, {responseType:'text'})
  }
}
