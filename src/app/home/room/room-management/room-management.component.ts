import { Router } from '@angular/router';
import { RoomServicesService } from './../../../data/room-services.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Component, OnInit } from '@angular/core';
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
      type: {
        title: 'Room type',
        type: 'string',
        filter: false     
      },
      adult: {
        title: 'Adult',
        type: 'number'
      },
      child: {
        title: 'Child',
        type: 'number'
      }
    }
  }

  source: LocalDataSource = new LocalDataSource()
  constructor(private readonly roomData: RoomServicesService, private router: Router) { 
  }

  ngOnInit(): void {
    this.roomData.ListRoom$.subscribe(
      rooms => this.source.load(rooms)
    )
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
