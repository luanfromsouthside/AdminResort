import { Voucher } from './../../../model/voucher.model';
import { Component, OnInit } from '@angular/core';
import { filter, pluck, switchMap } from 'rxjs/operators';
import { VoucherService } from '../../../data/voucher.service';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-details-voucher',
  templateUrl: './details-voucher.component.html',
})
export class DetailsVoucherComponent implements OnInit {
  voucher: Voucher;
  constructor(
    private route: ActivatedRoute, 
    private voucherService: VoucherService,
    private dialog: NbDialogService,
    private router: Router,
    private toast: NbToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      this.voucherService.getByID(id)
      .subscribe(
        res => {
          this.voucher = res
        }
      )
    })
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
        .subscribe(
          res => {
            this.toast.show('Remove success', 'REMOVE', {status:'success'})
            this.router.navigateByUrl("/home/voucher")
          },
          err => {
            this.dialog.open(DialogResultComponent, {
              context: {
                title: 'ERROR',
                content: err.error
              }
            })
          }
        )
        
      }
    })
  }
}
