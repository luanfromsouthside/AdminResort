import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomerService } from '../../../data/customer.service';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
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
        title: 'Tên khách hàng',
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
      }
    }
  }
  source: LocalDataSource = new LocalDataSource()
  constructor(
    private readonly customerService: CustomerService,
    private readonly router: Router,    
    private readonly dialog: NbDialogService,
    ) { }

  ngOnInit(): void {
    this.customerService.ListCustomer.subscribe(src => {
      this.source.load(src)
    })
  }

  customerSelect(row: any){
    this.router.navigateByUrl('/home/user/details/' + row.data.id)
  }

  onDeleteConfirm(event): void {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: 'Are you want to remove this customer?',
        content: `Customer ${event.data?.id}`
      }
    }).onClose.subscribe(result  => {
      if(result){
        this.customerService.removeCustomer(event.data.id)
        event.confirm.resolve();
      }
      else event.confirm.reject()
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
