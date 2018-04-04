import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PerfilPage} from '../perfil/perfil';
import {PromocionesPage} from '../promociones/promociones';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	
  Promocion(){
    this.navCtrl.push(PromocionesPage);
  }

  Perfil(){
    this.navCtrl.push(PerfilPage);
  }

  constructor(public navCtrl: NavController) {

  }

}
