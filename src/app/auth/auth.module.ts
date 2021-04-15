import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'user',
          token: {
            class: NbAuthJWTToken,
            key: 'access_token'
          },
          baseEndpoint: 'http://localhost:8000/auth',
          login: {
            endpoint: '/login',
            method: 'post',
          }
        }),
      ],
      forms: {
        login: {
          redirectDelay: 300, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'user',  // strategy id key.
          rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          redirect: {
            success: '',
            failure: null
          },
        },
        validation: {
          password: {
            required: true,
            minLength: 6,
            maxLength: 18,
          },
          username: {
            required: true,
            minLength: 4,
            maxLength: 50,
          },
        }
        }
    })
  ]
})
export class AuthModule { }
