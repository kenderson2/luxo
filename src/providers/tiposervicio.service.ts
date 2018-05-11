import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio} from './servicio';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioService {
    private url = 'http://localhost:5000/servicios';
    private options;
      constructor(private http2: Http,private http: HttpClient) {
        let headers = new Headers({
          'Content-Type': 'application/json'
          //'Authorization':'Bearer ' + token
        });
        this.options = new RequestOptions({ headers: headers });
        console.log('Hello UserServiceProvider Provider');
      }
    
    
      getServicios() {
        return this.http.get(this.url); /*aqui la ruta para obtener el get*/ 
      }
    
    }
    