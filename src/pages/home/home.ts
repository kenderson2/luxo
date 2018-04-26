import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PromocionesPage} from '../promociones/promociones';
import { CatalogoPage } from '../catalogo/catalogo';
import { AboutPage } from '../about/about';
import { MicalendarioPage } from '../micalendario/micalendario';
import { LoginBackgroundSliderPage } from '../login-background-slider/login-background-slider';
import { NotificacionesPage } from '../notificaciones/notificaciones';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	
  Promocion(){
    this.navCtrl.push(PromocionesPage);
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

  constructor(public navCtrl: NavController) {

  }

}
