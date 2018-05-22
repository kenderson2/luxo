import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contacto} from './contacto';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Usuario } from './usuario';

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
    private url = 'http://localhost:5000/motivo-cancelacion';
    private options;
      constructor(private http2: Http,private http: HttpClient) {
        let headers = new Headers({
          'Content-Type': 'application/json'
          //'Authorization':'Bearer ' + token
        });
        this.options = new RequestOptions({ headers: headers });
        console.log('Hello UserServiceProvider Provider');
      }
    
    
    getMotivo(){
        return this.http.get(this.url); /*aqui la ruta para obtener el get*/ 
    }
        
    postCancelacion(motivo: MotivoCancelacion){
        return this.http.post(this.url,motivo,this.options); /*Cambiar la ruta por el localhost*/ 
    }
}
    