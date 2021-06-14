import { Customer } from './../model/customer.model';
import { Booking } from './../model/booking.model';
import { HttpClient } from '@angular/common/http';
import { BaseEndpoint } from './base-endpoint.api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends BaseEndpoint{

  constructor(private http: HttpClient) { 
    super('Booking')
  }

  get ListBooking() {
    return this.http.get<Booking[]>(this.Root_URL)
  }

  SelectBooking(id:number) {
    return this.http.get<Booking>(this.Root_URL + id)
  }

  NewBooking(booking: Booking) {
    booking.voucherCode = booking.voucherCode.trim().toUpperCase()
    return this.http.post(this.Root_URL + 'create', booking, {responseType: 'text'})
  }

  EditBooking(booking: Booking) {
    booking.voucherCode = booking.voucherCode.trim().toUpperCase()
    return this.http.post(this.Root_URL + 'edit', booking, {responseType: 'text'})
  }

  DeleteBooking(id: number) {
    return this.http.delete(this.Root_URL + id, { responseType: 'text' })
  }

  CheckBooking(id: number, stt: string) {
    return this.http.post(this.Root_URL + `check/${id}?status=${stt}`,null, { responseType: 'text' })
  }

  AddSV(bill: number, service: string) {
    return this.http.post(this.Root_URL + 'add-sv', { bookingID: bill, serviceID: service}, { responseType: 'text' })
  }

  RemoveSV(bill: number, service: string) {
    return this.http.post(this.Root_URL + 'remove-sv', { bookingID: bill, serviceID: service}, { responseType: 'text' })
  }

  get ListCustomerAvailable() {
    return this.http.get<Customer[]>(this.Root_URL + 'customer')
  }

  ServicesOfBill(id: number) {
    return this.http.get<string[]>(this.Root_URL + 'service/' + id)
  }
}
