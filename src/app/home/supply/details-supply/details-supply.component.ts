import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { pluck, switchMap, filter } from 'rxjs/operators';
import { SupplyService } from '../../../data/supply.service';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { Supply } from '../../../model/supply.model';

@Component({
  selector: 'ngx-details-supply',
  templateUrl: './details-supply.component.html'
})
export class DetailsSupplyComponent implements OnInit {
  supply$: Observable<Supply>;
  constructor(
    private route: ActivatedRoute, 
    private supplyService: SupplyService,
    private dialog: NbDialogService,
    private router: Router) { }

  ngOnInit(): void {
    this.supply$ = this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.supplyService.getByID(id)),
      filter(supply => !!supply)
    )
  }

  onUpdate(id: string) {
    this.router.navigateByUrl(`/home/supply/update/${id}`)
  }

  onRemove(id: string) {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove supply?`,
        content: `Supply id: ${id}`
      }
    }).onClose.subscribe(result => {
      if(result) {
        this.supplyService.removeSupply(id)
        this.router.navigateByUrl("/home/supply")
      }
    })
  }

}
