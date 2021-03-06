import { NbAuthService } from '@nebular/auth';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { pluck, switchMap, filter } from 'rxjs/operators';
import { ServiceService } from '../../../data/service.service';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { Service } from '../../../model/service.model';

@Component({
  selector: 'ngx-detail-service',
  templateUrl: './detail-service.component.html',
})
export class DetailServiceComponent implements OnInit {
  service$: Observable<Service>;
  canEdit: boolean
  constructor(
    private route: ActivatedRoute, 
    private svService: ServiceService,
    private dialog: NbDialogService,
    private router: Router,
    private authService: NbAuthService) { }

  ngOnInit(): void {
    this.service$ = this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.svService.getByID(id)),
      filter(staff => !!staff)
    )
    this.authService.getToken().subscribe(
      token => {
        this.canEdit = token.getPayload().role == 'MANAGER'
      }
    )
  }

  onUpdate(id: string) {
    this.router.navigateByUrl(`/home/service/update/${id}`)
  }

  onRemove(id: string) {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove service?`,
        content: `Service id: ${id}`
      }
    }).onClose.subscribe(result => {
      if(result) {
        this.svService.removeService(id)
        this.router.navigateByUrl("/home/service")
      }
    })
  }
}
