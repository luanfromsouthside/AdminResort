import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-staff',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddStaffComponent implements OnInit {
  id: string = "staff";
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(event){
    event.preventDefault();
    console.log(this.id);
  }
}
