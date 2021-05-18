import { SupplyService } from './../../../data/supply.service';
import { Supply } from './../../../model/supply.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-update-supply',
  templateUrl: './update-supply.component.html'
})
export class UpdateSupplyComponent implements OnInit {
  form: FormGroup;
  supply$: Observable<Supply>;
  listType: any[] = [
    {value:'none',name:'Giữ nguyên số lượng'},
    {value:'new',name:'Cập nhật số lượng'},
    {value:'add',name:'Nhập thêm số lượng'},
  ]
  constructor(
    private fb: FormBuilder,
    private readonly supplyService: SupplyService,
    private readonly route: ActivatedRoute,
    private readonly dialog: NbDialogService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.supply$ = this.supplyService.getByID(id);
    })
    this.supply$.subscribe(s => {
      this.form = this.fb.group({
        name: [s.name, [
          Validators.required,
          Validators.maxLength(30)
        ]],
        type: [this.listType[0].value, [
          Validators.required,
        ]],
        total: [s.total, [
          Validators.required,
          Validators.min(1)
        ]]
      })
    })
  }

  updateSupply() {
    this.supply$.subscribe((s) => {
      this.dialog.open(DialogResultComponent,{
        context: {
          title: `Cập nhật vật tư ${s.id}?`
        }
      }).onClose.subscribe(result => {
        if(result) {
          this.update(s.id);
          this.router.navigateByUrl(`/home/supply/details/${s.id}`);
        }
      })
    });
  }

  update(idSup: string) {
      let s: Supply = {
        id : idSup,
        name : this.form.get('name').value,
        total : this.form.get('total').value
      }
      let type = this.form.get('type').value;
      this.supplyService.updateSupply(s,type);
  }

  resetForm() {
    this.supply$.subscribe(s => {
      this.form.get('name').setValue(s.name)
      this.form.get('type').setValue('none')
      this.form.get('total').setValue(s.total)
    })
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }

}
