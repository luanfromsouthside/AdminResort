import { NbIconLibraries } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './home-menu';

@Component({
  selector: 'ngx-home',
  styleUrls: ['home.component.scss'],
  template:`
  <ngx-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
  `,
})
export class HomeComponent implements OnInit{
  constructor(private iconsLibrary: NbIconLibraries){}

  ngOnInit() {
    this.iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    this.iconsLibrary.registerFontPack( 'far', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconsLibrary.registerFontPack('fas', {packClass: 'fas', iconClassPrefix: 'fa' });
  }

  menu = MENU_ITEMS;
}
