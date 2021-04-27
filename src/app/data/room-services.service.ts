import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IRoom } from '../model/room.model';
import { RoomData } from './mock-data/room-data';

@Injectable({
  providedIn: 'root'
})
export class RoomServicesService {

  constructor() { }

  get ListRoom$() {
    return of<IRoom[]>(RoomData);
  }

  getRoom(id: string): Observable<IRoom> {
    return this.ListRoom$.pipe(map(room => room.find(r => r.id == id)))
  }
}
