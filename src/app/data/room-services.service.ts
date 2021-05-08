import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Room } from '../model/room.model';
import { RoomData } from './mock-data/room-data';

@Injectable({
  providedIn: 'root'
})
export class RoomServicesService {

  constructor() { }

  get ListRoom$() {
    return of<Room[]>(RoomData);
  }

  getRoom(id: string): Observable<Room> {
    return this.ListRoom$.pipe(map(room => room.find(r => r.id == id)))
  }
}
