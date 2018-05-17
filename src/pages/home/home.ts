import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {PromocionesPage} from '../promociones/promociones';
import { CatalogoPage } from '../catalogo/catalogo';
import { AboutPage } from '../about/about';
import { MicalendarioPage } from '../micalendario/micalendario';
import { LoginBackgroundSliderPage } from '../login-background-slider/login-background-slider';
import { SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';
import { AuthService } from '../../services/auth.service';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { UserService } from '../../providers/user.service';
import { HomeService} from '../../providers/home.service';
import { TendenciasService} from '../../providers/tendencias.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn: boolean=false;
	name : string;
  apellido : string;
  token: any;
  user :any;
  usuario:any[];
  items: any[];
  tendencias: any[];

  /* slides = [
    {
      title  : 'Bienvenido',
      imagen : 'assets/imgs/imagen.jpg',   
      precio : '$5.00',

    },
    {
      title  : 'Bienvenido 2',
      imagen : 'assets/imgs/esmaltemanos.jpeg',  
      precio : '$20',    

    },
    {
      title  : 'Bienvenido 3',
      imagen : 'assets/imgs/imagen1.jpg',    
      precio : '30% menos',  

    }
    
  ]; */

  constructor(public navCtrl: NavController,
     public alertCtrl: AlertController,
      private auth:AuthService,      
      private userauth:UserService,
      private service:HomeService,
      private service2:TendenciasService) {

        this.iniciarLista();
        this.iniciarLista2();
      

  }
  iniciarLista(){
    this.service.getHome().subscribe(
     (data) => { // Success
     
       this.items= data['data'];               
     },
     (error) =>{
       console.error(error);
     }
   )
 }

 iniciarLista2(){
  this.service2.getTendencias().subscribe(
    (data) => { // Success
    
      this.tendencias= data['data'];               
    },
    (error) =>{
      console.error(error);
    }
  )
 }



  Promocion(){
    this.navCtrl.push(PromocionesPage);
  }

  ionViewDidLoad() {
  this.loggedIn=this.auth.checkSession();
 // this.loggedIn=true;
    
  // this.loggedIn=this.auth.checkSession();
  }

  logout(){
   localStorage.removeItem('token');
   const alert = this.alertCtrl.create({
    title: 'Mensaje',
     message: 'Haz cerrado tu sesión',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(LoginBackgroundSliderPage)
          }
        }        
      ]
      });
    alert.present();
  // this.navCtrl.setRoot(HomePage)
  }



  solicitud(){
    this.navCtrl.push(SolicitudCitaPage);
  }
  getUsuario(){
    if(this.auth.checkSession()){
      this.userauth.getUsuario()
      .subscribe(
        (data) => { // Success
          this.user=JSON.parse(data.text());
          this.usuario = this.user['data'];               
        },
        (error) =>{
          console.error(error);
        }
      )
    }
  }

  nosotros(){
    this.navCtrl.push(AboutPage);
  }
  agenda(){
    this.navCtrl.push(MicalendarioPage);
  }

  Servicios(){
    this.navCtrl.push(CatalogoPage);
  }
  login(){
    this.navCtrl.push(LoginBackgroundSliderPage);
  }

  notificaciones(){
    this.navCtrl.push(NotificacionesPage);
  }

  

  

}
