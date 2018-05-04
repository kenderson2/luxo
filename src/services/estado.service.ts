import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()
export class EstadoService {
   private url = 'http://localhost:5000/tokencliente';
   token : any;
   private options;

     constructor(private http: Http,private auth: AuthService) {
      // this.token=auth.obtenerToken();
      console.log(this.token)
           //let token = localStorage.getItem('token');
           let headers = new Headers({
             'Content-Type': 'application/x-www-form-urlencoded',
//             'Authorization':'Bearer '+this.token
           });
           this.options = new RequestOptions({ headers: headers });
     }
   
     getEstado(): Observable<any> {
       let url = `${this.url}`;
       return this.http.get(url, this.options);
    }

     private handleError (error: Response | any) {
       let errMsg: string;
       if (error instanceof Response) {
         const body = error.json() || '';
         const err = body.error || JSON.stringify(body);
         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
       } else {
         errMsg = error.message ? error.message : error.toString();
       }
       console.error(errMsg);
       return Observable.throw(errMsg);
     }
}