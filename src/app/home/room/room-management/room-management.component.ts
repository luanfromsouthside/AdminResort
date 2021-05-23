import { HttpClient } from '@angular/common/http';
import { RoomService } from './../../../data/room.service';
import { Router } from '@angular/router';
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
    },
    hideSubHeader: true,
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Room ID',
        type: 'string',
        filter: false
      },
      name: {
        title: 'Room name',
        type: 'string',
        filter: false
      },
      roomType: {
        title: 'Room type',
        type: 'string',
        filter: false ,
        valuePrepareFunction: (data: any) => {
          return data.nameType
        }    
      },
      adult: {
        title: 'Adult',
        type: 'number'
      },
      child: {
        title: 'Child',
        type: 'number'
      },
      price: {
        title: 'price',
        type: 'number'
      }
    }
  }

  source: ServerDataSource;
  constructor(
    private readonly roomService: RoomService, 
    private router: Router,
    private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.source = this.roomService.SrcDataTable
  }

  editRoom(room: any):void {
    this.router.navigateByUrl("/home/room/edit/"+room.data.id)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSearch(query: string = ''){
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'type',
        search: query
      },
    ], false)
  }
}
