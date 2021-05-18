import { NbDialogService } from '@nebular/theme';
import { RoomTypeService } from './../../../data/room-type.service';
import { RoomType } from './../../../model/room-type.model';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-room-type',
  templateUrl: './room-type.component.html',
})
export class RoomTypeComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Mã Loại phòng',
        type: 'string',
        filter: false,
        editable: false
      },
      nameType: {
        title: 'Tên loại phòng',
        type: 'string',
        filter: false
      }
    }
  }

  source: LocalDataSource = new LocalDataSource()
  constructor(
    private roomTypeService: RoomTypeService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: NbDialogService
    ) { }

  ngOnInit(): void {
    this.roomTypeService.List.subscribe(src => this.source.load(src))
  }

  onDeleteConfirm(event) {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove service?`,
        content: `Service id: ${event.data.id}`
      }
    }).onClose.subscribe(result => {
      if(result) {
        this.roomTypeService.removeRoomType(event.data.id)
        this.onSearch('')
      }
    })
  }

  onEditConfirm(event) {
    const val = this.validate(false, event.newData)
    if(val.has(false)){
      alert(val.get(false))
    }
    else{
      this.roomTypeService.updateRoomType(event.newData)
      this.onSearch('')
    }
  }

  onAddConfirm(event) {
    const val = this.validate(true, event.newData)
    if(val.has(false)) {
      alert(val.get(false))
      this.onSearch('')
    }
    else{
      this.roomTypeService.addRoomType(event.newData)
      this.onSearch('')
    }
  }

  validate(isAdd:boolean, model: RoomType): Map<boolean,string> {
    const idLength = model.id.trim().length;
    const nameLength = model.nameType.trim().length;
    const result = new Map<boolean,string>();
    if(isAdd) {
      if(idLength<= 0) return result.set(false,"ID is required");
      else if (idLength >10) return result.set(false, "ID constain at most 10 characters");
    }
    if(nameLength<= 0) return result.set(false,"Name is required");
    else if (nameLength >30) return result.set(false, "Name constain at most 30 characters");
    return result.set(true,'')
  }

  onSearch(query) {
    if(query.trim().length === 0) {
      this.source.reset()
      this.roomTypeService.List.subscribe(src => {
        this.source.load(src)
      })      
    }
    else {
      query = query.trim()
      this.source.setFilter([
        {
          field: 'id',
          search: query
        },
        {
          field: 'name',
          search: query
        }
      ], false)
    }
  }
}
