import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
   
   loggedIn: boolean;
   url = 'http://localhost:5000/login';

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
      .map(res => res.text())
      .map(res => {
         if (res=="error" || res=="nofound"){
            this.loggedIn = false;
         } else {
            localStorage.setItem('token', res);
            this.loggedIn = true;
         }
         return this.loggedIn;
      });
   }

   logout(): void {
      localStorage.removeItem('token');
      this.loggedIn = false;
   }

   isLoggedIn() {
      return this.loggedIn;
   }
}