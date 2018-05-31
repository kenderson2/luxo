import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Usuario } from './usuario';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import { MotivoCancelacion } from './motivo-cancelacion';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MotivoCancelacionService {
    private url = 'http://localhost:5000/cancelacion-solicitud';
    //private url2= 'http://localhost:5000/tokencancelacion';
    token : any;
    private options;

      constructor(private http: Http,private auth: AuthService) {
        this.token=auth.obtenerToken();
         console.log(this.token)
            let token = localStorage.getItem('token');
            let headers = new Headers({
              'Content-Type': 'application/json',
              'Authorization':'Bearer '+this.token
            });
            this.options = new RequestOptions({ headers: headers });
      }
    
      getMotivo(): Observable<any> {
        let url = `${this.url}`;
        return this.http.get(url, this.options);
      }
        
    postCancelacion(motivo: MotivoCancelacion){
        return this.http.post(this.url,motivo,this.options); /*Cambiar la ruta por el localhost*/ 
    }
}
    