import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Solicitud }     from './solicitud';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()
export class SolicitarService {
    private url = 'http://localhost:5000/solicitud';
    token : any;
    private options;

      constructor(private http: Http,private auth: AuthService) {
        this.token=auth.obtenerToken();
         console.log(this.token)
            //let token = localStorage.getItem('token');
            let headers = new Headers({
              'Content-Type': 'application/json',
              'Authorization':'Bearer '+this.token
            });
            this.options = new RequestOptions({ headers: headers });
      }
    
      realizarSolicitud(solicitud: Solicitud){
          return this.http.post(this.url,solicitud,this.options); /*Cambiar la ruta por el localhost*/ 
      }
}
