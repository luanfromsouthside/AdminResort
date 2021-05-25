import { HttpClient } from '@angular/common/http';
import { BaseEndpoint } from './base-endpoint.api';
import { Voucher } from './../model/voucher.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoucherService extends BaseEndpoint {
  
  constructor(private http: HttpClient) {
    super('Voucher')
   }

  get List() {
    return this.http.get<Voucher[]>(this.Root_URL)
  }

  getByID(id: string):Observable<Voucher>{
    return this.http.get<Voucher>(this.Root_URL + id)
  }

  addVoucher(voucher: Voucher) {
    console.log(voucher)
    return this.http.post(this.Root_URL + 'create', voucher, { responseType: 'text'})
  }

  removeVoucher(code: string) {
    return this.http.delete(this.Root_URL + code, {responseType:'text'})
  }

  updateVoucher(voucher: Voucher) {
    return this.http.post(this.Root_URL + 'edit', voucher, {responseType:'text'})
  }
}
