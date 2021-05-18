import { VoucherService } from './../../../data/voucher.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-list-vouchers',
  templateUrl: './list-vouchers.component.html',
})
export class ListVouchersComponent implements OnInit {
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
      code: {
        title: 'Mã Voucher',
        type: 'string',
        filter: false
      },
      fromDate: {
        title: 'Ngày bắt đầu',
        type: 'date',
        valuePrepareFunction: (date)=>{
          var raw = new Date(date);
          var format = new DatePipe('en-EN').transform(raw, 'dd/MM/yyyy');
          return format;
        }   
      },
      toDate: {
        title: 'Ngày kết thúc',
        type: 'date',
        valuePrepareFunction: (date)=>{
          var raw = new Date(date);
          var format = new DatePipe('en-EN').transform(raw, 'dd/MM/yyyy');
          return format;
        }   
      },
      condition: {
        title: 'Điều kiện áp dụng',
        type: 'html',
        valuePrepareFunction: (condition) => {
          return `&GreaterEqual; ${condition}`
        }
      },
      discount: {
        title : 'Giảm giá (%)',
        type: 'string',
        valuePrepareFunction: (value) => {
          return `${value} %`
        }
      }
    }
  }
  source: LocalDataSource = new LocalDataSource()
  constructor(
    private readonly voucherService: VoucherService,
    private readonly router: Router,    
    private readonly dialog: NbDialogService,
    private readonly route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.voucherService.List.subscribe(src => {
      this.source.load(src)
    })
    this.route.queryParams
    .subscribe(params => {
      if(typeof(params.search) === 'string') this.onSearch(params.search)
    })
  }
  customerSelect(row: any){
    this.router.navigateByUrl('/home/voucher/details/' + row.data.code)
  }

  onDeleteConfirm(event): void {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: 'Are you want to remove this voucher?',
        content: `Voucher ${event.data?.code}`
      }
    }).onClose.subscribe(result  => {
      if(result){
        this.voucherService.removeVoucher(event.data.code)
        event.confirm.resolve();
      }
      else event.confirm.reject()
    })
  }

  onSearch(query){
    if(query.trim().length === 0) {
      this.source.reset()
      this.voucherService.List.subscribe(src => {
        this.source.load(src)
      })      
    }
    else {
      query = query.trim()
      this.source.setFilter([
        {
          field: 'code',
          search: query
        },
        {
          field: 'condition',
          search: query
        },
        {
          field : 'fromDate',
          search: query
        },
        {
          field : 'toDate',
          search: query
        },
      ], false)
    }
  }
}
