import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {PromocionesPage} from '../promociones/promociones';
import { CatalogoPage } from '../catalogo/catalogo';
import { AboutPage } from '../about/about';
import { MicalendarioPage } from '../micalendario/micalendario';
import { LoginBackgroundSliderPage } from '../login-background-slider/login-background-slider';
import { SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';
import { AuthService } from '../../services/auth.service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn: boolean=false;
	name : string;
  apellido : string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private auth:AuthService,private toastCtrl: ToastController) {

  }

  Promocion(){
    this.navCtrl.push(PromocionesPage);
  }

  ionViewDidLoad() {
  //  this.loggedIn=this.auth.checkSession();
  this.loggedIn=true;
    if (this.loggedIn == true)
      {
        this.presentToast();

      }
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
            this.navCtrl.setRoot(HomePage)
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

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Bienvenido Nury',
      duration: 3000,
      position: 'top',
      cssClass: "toast.scss"      
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  

  

}
