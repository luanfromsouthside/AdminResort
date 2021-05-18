import { ServiceService } from './../../../data/service.service';
import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-list-service',
  templateUrl: './list-service.component.html',
})
export class ListServiceComponent implements OnInit {
  settings = {
    actions:{
      add: false,
      edit: false,
      delete:false
    },
    hideSubHeader: true,
    columns: {
      id: {
        title: 'ID',
        type: 'string',
        filter: false
      },
      name: {
        title: 'Tên dịch vụ',
        type: 'string',
        filter: false
      },
      price: {
        title: 'Giá',
        type: 'number',
        filter: false
      },
      description: {
        title: 'Mô tả',
        type: 'string'
      }
    }
  }
  source: LocalDataSource = new LocalDataSource()
  constructor(
    private svService: ServiceService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.svService.List.subscribe(src => {
      this.source.load(src);
    })
    this.route.queryParams
    .subscribe(params => {
      if(typeof(params.search) === 'string') this.onSearch(params.search)
    })
  }

  rowSelect(row: any):void {
    this.router.navigateByUrl('/home/service/details/' + row.data.id)
  }

  onSearch(query){
    if(query.trim().length === 0) {
      this.source.reset()
      this.svService.List.subscribe(src => {
        this.source.load(src)
      })      
    }
    else {
      query = query.trim()
      this.source.setFilter([
        {
          field: 'id',
          search: query
        },
        {
          field: 'name',
          search: query
        },
        {
          field: 'price',
          search: query
        }
      ], false)
    }
  }
}
