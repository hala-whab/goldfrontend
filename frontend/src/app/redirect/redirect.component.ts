
import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import {Usertype} from '../Usertype';
import { Router } from "@angular/router";

@Component({
  selector: 'ngx-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  
 user:Usertype={};
 
  constructor(/*private auth: XAuthService, */private authService: NbAuthService, private router: Router){
 
    
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          console.log(token.getValue());
          this.user = token.getPayload(); 
          console.log(this.user); 
         // console.log(token.getPayload()); 
        //  this.headers.append('X-Authorization', token.getValue()); 
        //  this.headers.append('Content-Type' , 'application/json');
        }
      
      });
  }


  ngOnInit() {
   
    console.log(this.user);
   if( this.user.scopes ==='STANDARD_USER' ){

    this.router.navigate( ['/pages/admindashboard'] );
     
    }
    else{
      console.log("redirect");
     // this.auth.getAuth().subscribe() ;

      this.router.navigate( ['/pages/dashboard'] );
    }
  }

  }