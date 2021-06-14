import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { BookingService } from './../../../data/booking.service';
import { StatusBillPipe } from './../../../@theme/pipes/status-bill.pipe';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-list-booking',
  templateUrl: './list-booking.component.html'
})
export class ListBookingComponent implements OnInit {
  settings = {
    actions:{
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: '#',
        type: 'number',
        filter: true
      },
      room: {
        title: 'Room',
        type: 'string',
        filter: true ,
        valuePrepareFunction: (data: any) => {
          return data.id + " : " + data.name
        }
      },
      customer: {
        title: 'Customer',
        type: 'string',
        filter: true ,
        valuePrepareFunction: (data: any) => {
          return data.id + " : " + data.name
        }    
      },
      checkinDate: {
        title: 'Check In',
        type: 'date',
        valuePrepareFunction: (date)=>{
          var raw = new Date(date);
          var format = new DatePipe('en-EN').transform(raw, 'dd/MM/yyyy');
          return format;
        }
      },
      checkoutDate: {
        title: 'CheckOut',
        type: 'date',
        valuePrepareFunction: (date)=>{
          var raw = new Date(date);
          var format = new DatePipe('en-EN').transform(raw, 'dd/MM/yyyy');
          return format;
        }
      },
      status: {
        title: 'Status',
        type: 'string',
        valuePrepareFunction: (data)=>{
          return new StatusBillPipe().transform(data)
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: '', title:'Chờ xác nhận'},
              {value: 'confirm', title:'Đã xác nhận'},
              {value: 'payment', title:'Đã thanh toán'},
              {value: 'cancel', title:'Đã hủy'},
              {value: 'checkin', title:'Check In'},
              {value: 'checkout', title:'Checkout'},
            ],
          }
        }
      }
    }
  }
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingService.ListBooking.subscribe(data => {
      this.source.load(data)
    })
  }

  SelectBill(bill: any) {
    this.router.navigateByUrl('/home/booking/details/' + bill.data.id)
  }
}
