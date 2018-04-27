import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
   
   loggedIn: boolean;
   showLogout:boolean = false;
   url = 'http://localhost:5000/loginid';

   constructor(private http: Http){
    this.loggedIn = false;
   }
   
   login(userInfo) {
      let url = `${this.url}`;
      let iJon = JSON.stringify(userInfo);

      return this.http.post(url, iJon, {
         headers: new Headers({
            'Content-Type':'application/json'
         })
      })
      .map(res => {
            localStorage.setItem('token', res.text());
            this.loggedIn = true;
            return this.loggedIn;
    }
    )
   }

     checkSession() {
       let checkKey = localStorage.getItem('token');
       if(checkKey == null){
           this.showLogout = false; // changed
           console.log('null key: ', checkKey);
       } else {
           this.showLogout = true; // changed
           //this check will only be available once the user is logged in
           console.log('key exist: ', checkKey);
       }
       return this.showLogout;
      }

   logout(){
      localStorage.removeItem('token');
      this.loggedIn = false;
   }

   isLoggedIn() {
      return this.loggedIn;
   }
}