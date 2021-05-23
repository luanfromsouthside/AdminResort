import { Room } from './../model/room.model';
import { BaseEndpoint } from './base-endpoint.api';
import { ServerDataSource } from 'ng2-smart-table';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends BaseEndpoint {
  constructor(private http: HttpClient) {
    super('Room');
  }

  get ListRooms() {
    return this.http.get(this.Root_URL)
  }

  SelectRoom(id: string) {
    return this.http.get<Room>(this.Root_URL + '/' + id);
  }

  get SrcDataTable() {
    return new ServerDataSource(this.http, { endPoint: this.Root_URL});
  }

  get url() { return this.Root_URL}
}
