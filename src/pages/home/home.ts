import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PromocionesPage} from '../promociones/promociones';
import { CatalogoPage } from '../catalogo/catalogo';
import { AboutPage } from '../about/about';
import { LoginBackgroundSliderPage } from '../login-background-slider/login-background-slider';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn: boolean=false;

  constructor(public navCtrl: NavController, private auth:AuthService) {
    
  }

  ionViewDidLoad() {
    this.loggedIn=this.auth.checkSession();
  }

  Promocion(){
    this.navCtrl.push(PromocionesPage);
  }

  nosotros(){
    this.navCtrl.push(AboutPage);
  }

  Servicios(){
    this.navCtrl.push(CatalogoPage);
  }
  login(){
    this.navCtrl.push(LoginBackgroundSliderPage);
  }  

}
