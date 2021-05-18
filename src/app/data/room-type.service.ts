import { RoomType } from './../model/room-type.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  RTData:RoomType[]=[
    {
      id:"VIP",
      nameType: "Phòng V.I.P",
      rooms: null
    },
    {
      id:"NORMAL",
      nameType: "Phòng thường",
      rooms: null
    },
    {
      id:"COUPLE",
      nameType: "Phòng đôi",
      rooms: null
    },
  ]
  constructor() { }

  get List() {
    return of<RoomType[]>(this.RTData)
  }

  getByID(id: string):Observable<RoomType>{
    return this.List.pipe(map(RoomType => RoomType.find(s => s.id === id)))
  }

  addRoomType(RoomType: RoomType) {
    return this.RTData.push(RoomType)
  }

  removeRoomType(RoomTypeID: string) {
    this.RTData.forEach((item,index) => {
      if(item.id === RoomTypeID) delete this.RTData[index];
    })
  }

  updateRoomType(RoomType: RoomType) {
    this.RTData.forEach((item) => {
      if(item.id === RoomType.id) {
        item.nameType = RoomType.nameType
      }
    })
  }
}
