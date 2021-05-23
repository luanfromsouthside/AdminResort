import { NbDialogService } from '@nebular/theme';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StaffService } from '../../../data/staff.service';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-list-staff',
  templateUrl: './list-staff.component.html'
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
        type: 'string',
        valuePrepareFunction: (permission) => {
          return permission.name;
        }
      }
    }
  }
  source: any;
  constructor(
    private dialog: NbDialogService,
    private staffService: StaffService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.source = this.staffService.SrcDataTable;
    this.route.queryParams
    .subscribe(params => {
      if(typeof(params.search) === 'string') this.onSearch(params.search)
    })
  }

  staffSelect(row: any){
    this.router.navigateByUrl('/home/staff/details/' + row.data.id)
  }

  onDeleteConfirm(event): void {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: 'Are you want to remove this staff?',
        content: "Staff " + event.data.id
      }
    }).onClose.subscribe(result  => {
      if(result){
        this.staffService.removeStaff(event.data.id)
        .subscribe(
          res => { this.source = this.staffService.SrcDataTable },
          err => { console.log(err) }
        )
      }
      else event.confirm.reject()
    })
  }

  onSearch(query){
    if(query.trim().length === 0) {
      this.source.reset()
      this.source = this.staffService.SrcDataTable  
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
        },
      ], false)
    }
  }
}
