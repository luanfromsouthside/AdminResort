import { SupplyService } from './../../../data/supply.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-list-supplies',
  templateUrl: './list-supplies.component.html'
})
export class ListSuppliesComponent implements OnInit {
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
        title: 'Tên vật tư',
        type: 'string',
        filter: false
      },
      total: {
        title: 'Số lượng',
        type: 'number',
        filter: false
      },
    }
  }
  source: LocalDataSource = new LocalDataSource()
  constructor(
    private supplyService: SupplyService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.supplyService.List.subscribe(src => {
      this.source.load(src);
    })
    this.route.queryParams
    .subscribe(params => {
      if(typeof(params.search) === 'string') this.onSearch(params.search)
    })
  }

  rowSelect(row: any):void {
    this.router.navigateByUrl('/home/supply/details/' + row.data.id)
  }

  onSearch(query){
    if(query.trim().length === 0) {
      this.source.reset()
      this.supplyService.List.subscribe(src => {
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
        }
      ], false)
    }
  }
}
