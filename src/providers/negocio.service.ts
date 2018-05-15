import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Negocio} from './negocio';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Usuario } from './usuario';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NegocioService {
 
    private url = 'http://localhost:5000/negocio';
    private options;
      constructor(private http2: Http,private http: HttpClient) {
        let headers = new Headers({
          'Content-Type': 'application/json'
          //'Authorization':'Bearer ' + token
        });
        this.options = new RequestOptions({ headers: headers });
        console.log('Hello UserServiceProvider Provider');
      }
    
    
      getNegocio() {
        return this.http.get(this.url); /*aqui la ruta para obtener el get*/ 
      }
    
    }
    