import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Room } from './../../../model/room.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, filter } from 'rxjs/operators';
import { RoomService } from '../../../data/room.service';

@Component({
  selector: 'ngx-edit-room',
  templateUrl: './edit-room.component.html',
})
export class EditRoomComponent implements OnInit {
  room$: Observable<Room>;
  formEdit: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly roomService: RoomService,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.room$ = this.roomService.SelectRoom(id);
    })
    this.initFrm()
  }

  initFrm() {
    this.room$.subscribe(r => {
      this.formEdit = this.fb.group({
        name: [r.name,[
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ]],
        
      })
    })
  }

}
