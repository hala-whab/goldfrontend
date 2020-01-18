import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { Usertype } from './Usertype';

@Injectable()
export class NbAuthGuard implements CanActivate {

  user: Usertype = {};

  constructor(private authService: NbAuthService, private router: Router) {
    // this.authService.refreshToken('email',token.getValue()).subscribe((data)=>{
    //   console.log("refresh >>>>>>>>>")
    //    console.log(data);
    //  })

  }

  canActivate() {
    this.authService.getToken()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();

        } else {
          this.router.navigate(['/auth/logout']);
        }
      });
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['/auth/logout']);
          }
        }),
      );
  }
}
