import { CustomerService } from '../../../data/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../../../model/customer.model';
import { NbDialogService } from '@nebular/theme';
import { filter, pluck, switchMap } from 'rxjs/operators';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-detail-users',
  templateUrl: './detail-users.component.html',
})
export class DetailUsersComponent implements OnInit {
  customer$: Observable<Customer>;
  constructor(
    private route: ActivatedRoute, 
    private customerService: CustomerService,
    private dialog: NbDialogService,
    private router: Router) { }

  ngOnInit(): void {
    this.customer$ = this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.customerService.getByID(id)),
      filter(user => !!user)
    )
  }

  onRemove(id: string) {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove user ?`,
        content: `User ${id}`
      }
    }).onClose.subscribe(result => {
      if(result) {
        //this.customerService.removeCustomer(id)
        this.router.navigateByUrl("/home/user")
      }
    })
  }
 
  onUpdate(id: string) {
    this.router.navigateByUrl("/home/user/update/" + id)
  }

}
