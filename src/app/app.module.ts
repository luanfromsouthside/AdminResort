import { RoleProvider } from './data/role.provider';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy, NbPasswordAuthStrategyOptions } from '@nebular/auth';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { of as observableOf } from 'rxjs/observable/of'
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
// import { LayoutService } from './@core/utils';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbLayoutModule,
    ThemeModule.forRoot(),
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'user',
          
        }),
      ],
      forms: {}
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['news', 'comments'],
        },
        user: {
          parent: 'guest',
          create: 'comments',
        },
        moderator: {
          parent: 'user',
          create: 'news',
          remove: '*',
        },
      }
    })
  ],
  providers: [
    {
      provide: NbRoleProvider,
      useClass: RoleProvider
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
