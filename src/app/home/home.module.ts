import { NbAuthService, NbTokenService, NbTokenStorage } from '@nebular/auth';
import { NbLayoutModule, NbListModule, NbMenuModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from './../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbAccessChecker } from '@nebular/security';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  providers: [NbAuthService, NbTokenService, NbTokenService, NbAccessChecker]
})
export class HomeModule { }
