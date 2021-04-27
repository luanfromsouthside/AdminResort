import { Component } from '@angular/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  user:any;
  constructor(private authService: NbAuthService){
    this.authService.onTokenChange()
    .subscribe((token: NbAuthJWTToken) => {
      if(token.isValid()){
        this.user = token.getPayload();
        console.log('payload ');
        console.log(this.user?.sub)
      }
    })
  }
}
