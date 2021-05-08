import { Room } from './../../../model/room.model';
import { Observable } from 'rxjs';
import { RoomServicesService } from './../../../data/room-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'ngx-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
export class EditRoomComponent implements OnInit {
  room$: Observable<Room>

  constructor(private readonly route: ActivatedRoute, private readonly services: RoomServicesService) { }

  ngOnInit(): void {
    this.room$ = this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.services.getRoom(id)),
      filter(room => !!room)
    )
  }

}
