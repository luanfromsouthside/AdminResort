import { BaseEndpoint } from './base-endpoint.api';
import { HttpClient } from '@angular/common/http';
import { RoomType } from './../model/room-type.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerDataSource } from 'ng2-smart-table';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService extends BaseEndpoint{
  constructor(private http: HttpClient) 
  {
    super('RoomType')
  }

  get List() {
    return this.http.get<RoomType[]>(this.Root_URL)
  }

  getByID(id: string){
    return this.http.get<RoomType>(this.Root_URL + id);
  }

  addRoomType(RoomType: RoomType) {
    return this.http.post(this.Root_URL + 'create', RoomType, { responseType: 'text' })
  }

  removeRoomType(id: string) {
    return this.http.delete(this.Root_URL + id, { responseType: 'text' })
  }

  updateRoomType(RoomType: RoomType) {
    return this.http.post(this.Root_URL +'edit', RoomType, { responseType: 'text' })
  }
}
