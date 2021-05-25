import { SupplyService } from './supply.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BaseEndpoint } from './base-endpoint.api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistributionService extends BaseEndpoint {

  constructor(private http: HttpClient, private fb: FormBuilder, private supplyService: SupplyService) {
    super('DistributionSP')
  }

  GiveSp(model: { roomID: string, supplyID: string, count: number }) {
    return this.http.post(this.Root_URL + 'givesp4room', model, { responseType: 'text'})
  }

  RemoveSP(model: { roomID: string, supplyID: string, count: number }) {
    return this.http.post(this.Root_URL + 'removespFromRoom', model, {responseType: 'text'})
  }
}
