import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RoomService } from './../../../data/room.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { Component, OnInit } from '@angular/core';
//import { RoomService } from '../../../shared/room.service';
@Component({
  selector: 'ngx-room-management',
  templateUrl: './room-management.component.html',
})
export class RoomManagementComponent implements OnInit {
  settings = {
    actions:{
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: 'Room ID',
        type: 'string',
        filter: true
      },
      name: {
        title: 'Room name',
        type: 'string',
        filter: true
      },
      roomType: {
        title: 'Room type',
        type: 'string',
        filter: true ,
        valuePrepareFunction: (data: any) => {
          return data.nameType
        }    
      },
      adult: {
        title: 'Adult',
        type: 'number',
        filter: true
      },
      child: {
        title: 'Child',
        type: 'number',
        filter: true
      },
      price: {
        title: 'price',
        type: 'number',
        filter: true
      }
    }
  }

  source: LocalDataSource = new LocalDataSource();
  constructor(
    private readonly roomService: RoomService, 
    private router: Router,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.loadSrc()
    // this.route.queryParams.subscribe(params => {
    //   this.onSearch(params.search)
    // })
  }

  loadSrc() {
    this.source.reset()
    this.roomService.ListRooms
    .subscribe(
      res => {this.source.load(res); console.log(res)}
    )
  }

  selectRoom(room: any):void {
    this.router.navigateByUrl("/home/room/details/"+room.data.id)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSearch(query: string = ''){
    query.trim()
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
    ], false)
  }
}
