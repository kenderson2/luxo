import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PerfilPage} from '../perfil/perfil';
import {PromocionesPage} from '../promociones/promociones';
import { CatalogoPage } from '../catalogo/catalogo';

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

  Servicios(){
    this.navCtrl.push(CatalogoPage);
  }

  constructor(public navCtrl: NavController) {

  }

}
