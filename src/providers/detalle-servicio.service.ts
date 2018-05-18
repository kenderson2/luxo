import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad';
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
export class DetalleServicioService {
    private url = 'http://localhost:5000/ciudades'; // < falta este
    private url2 = 'http://localhost:5000/tipo-servicio-parametro'; // me devuelve los valores para el segundo combo
    
    private options;
      constructor(private http2: Http,private http: HttpClient) {
        let headers = new Headers({
          'Content-Type': 'application/json'
          //'Authorization':'Bearer ' + token
        });
        this.options = new RequestOptions({ headers: headers });
        console.log('Hello UserServiceProvider Provider');
      }
    
      /// importante cambiar los nombres de estos 2 metodos de abajo
    
      getCiudades() {
        return this.http.get(this.url); /*aqui la ruta para obtener el get*/ 
      }

      getDetallesPorServicio(id : number){
        let url =`${this.url2}/${id}`;
        console.log(url);
        return this.http.get(url);
        
      }



      
    }
    