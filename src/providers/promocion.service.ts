import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Negocio} from './negocio';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Promocion } from './promocion';
import { Usuario } from './usuario';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';


@Injectable()
export class PromocionService {

    private url = 'http://localhost:5000/promocion';
    private options;
      constructor(private http2: Http,private http: HttpClient) {
        let headers = new Headers({
          'Content-Type': 'application/json'
          //'Authorization':'Bearer ' + token
        });
        this.options = new RequestOptions({ headers: headers });
        console.log('Hello UserServiceProvider Provider');
      }
    
    
      getPromo() {
        return this.http.get(this.url); /*aqui la ruta para obtener el get*/ 
      }
    
    }
    