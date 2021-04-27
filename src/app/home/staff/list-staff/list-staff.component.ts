import { NbDialogService } from '@nebular/theme';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StaffService } from '../../../data/staff.service';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {
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
        title: 'ID',
        type: 'string',
        filter: false
      },
      name: {
        title: 'Tên nhân viên',
        type: 'string',
        filter: false
      },
      birth: {
        title: 'Ngày sinh',
        type: 'date',
        valuePrepareFunction: (date)=>{
          var raw = new Date(date);
          var format = new DatePipe('en-EN').transform(raw, 'dd/MM/yyyy');
          return format;
        }   
      },
      phone: {
        title: 'SDT',
        type: 'string'
      },
      gender: {
        title: 'Giới tính',
        type: 'boolean',
        valuePrepareFunction: (gender)=>{
          return gender?"Nam":"Nữ"
        }
      },
      permission: {
        title: 'Chức vụ',
        type: 'string'
      }
    }
  }
  source: LocalDataSource = new LocalDataSource()
  constructor(
    private dialog: NbDialogService,
    private staffService: StaffService,
    ) { }

  ngOnInit(): void {
    this.staffService.ListStaff.subscribe(src => {
      this.source.load(src)
    });
  }

  onDeleteConfirm(event): void {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: 'Are you want to remove this staff?',
        content: ""
      }
    }).onClose.subscribe(result  => {
      result ? event.confirm.resolve() : event.confirm.reject();
    })
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
    ], false)
  }
}
