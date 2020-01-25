import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Usertype } from './Usertype';

@Injectable()
export class RauthService implements CanActivate {

  user: Usertype = {};
  constructor(public auth: NbAuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray.expectedRole;
    console.log("expectedRoleArray  "+expectedRoleArray)
    this.auth.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();
        }

      });

    const tokenPayload = this.user;

    let expectedRole = '';
console.log("scopes "+tokenPayload.scopes)
    for (let i = 0; i < expectedRoleArray.length; i++) {
      if ( tokenPayload.scopes.toString().includes(expectedRoleArray[i])) {
        expectedRole = tokenPayload.scopes;
      }
    }
console.log("this.auth.isAuthenticated() && tokenPayload.scopes === expectedRole "+ this.auth.isAuthenticated() && tokenPayload.scopes === expectedRole)
    if (this.auth.isAuthenticated() && tokenPayload.scopes === expectedRole) {
      
      return true;
    }
    return false;

  }
}
