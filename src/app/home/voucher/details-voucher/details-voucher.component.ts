import { Voucher } from './../../../model/voucher.model';
import { Component, OnInit } from '@angular/core';
import { filter, pluck, switchMap } from 'rxjs/operators';
import { VoucherService } from '../../../data/voucher.service';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-details-voucher',
  templateUrl: './details-voucher.component.html',
})
export class DetailsVoucherComponent implements OnInit {
  voucher$: Observable<Voucher>;
  constructor(
    private route: ActivatedRoute, 
    private voucherService: VoucherService,
    private dialog: NbDialogService,
    private router: Router) { }

  ngOnInit(): void {
    this.voucher$ = this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.voucherService.getByID(id)),
      filter(voucher => !!voucher)
    )
  }

  onUpdate(id: string) {
    this.router.navigateByUrl(`/home/voucher/update/${id}`)
  }

  onRemove(id: string) {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove voucher?`,
        content: `voucher code: ${id}`
      }
    }).onClose.subscribe(result => {
      if(result) {
        this.voucherService.removeVoucher(id)
        this.router.navigateByUrl("/home/voucher")
      }
    })
  }
}
