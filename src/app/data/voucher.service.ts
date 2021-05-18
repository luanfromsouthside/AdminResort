import { Voucher } from './../model/voucher.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  VouchersData: Voucher[] = [
    {
      code : 'SUMMERTIME',
      discount : 20,
      condition : 900000,
      fromDate : new Date('2020-5-23'),
      toDate : new Date('2000-6-23')
    },
    {
      code : 'SUMMERTIME',
      discount : 20,
      condition : 900000,
      fromDate : new Date('2020-5-23'),
      toDate : new Date('2000-6-23')
    },
    {
      code : 'SUMMERTIME',
      discount : 20,
      condition : 900000,
      fromDate : new Date('2020-5-23'),
      toDate : new Date('2000-6-23')
    },
    {
      code : 'SUMMERTIME',
      discount : 20,
      condition : 900000,
      fromDate : new Date('2020-5-23'),
      toDate : new Date('2000-6-23')
    },
  ]
  constructor() { }

  get List() {
    return of<Voucher[]>(this.VouchersData)
  }

  getByID(id: string):Observable<Voucher>{
    return this.List.pipe(map(voucher => voucher.find(s => s.code === id)))
  }

  addVoucher(voucher: Voucher) {
    return this.VouchersData.push(voucher)
  }

  removeVoucher(code: string) {
    this.VouchersData.forEach((item,index) => {
      if(item.code === code) delete this.VouchersData[index];
    })
  }

  updateVoucher(voucher: Voucher) {
    this.VouchersData.forEach((item) => {
      if(item.code === voucher.code) {
        item.discount = voucher.discount,
        item.condition = voucher.condition,
        item.fromDate = voucher.fromDate,
        item.toDate = voucher.toDate
      }
    })
  }
}
