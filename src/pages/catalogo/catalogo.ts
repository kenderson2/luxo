import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CatalogomanicurePage } from '../catalogomanicure/catalogomanicure';
import { CatalogopedicurePage } from '../catalogopedicure/catalogopedicure';
import { CatalogosistemaPage } from '../catalogosistema/catalogosistema';

import { ServicioService } from '../../providers/servicio.service';

/**
 * Generated class for the CatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private service: ServicioService) {
    this.iniciarLista();
  }

  items :any[];
  iniciarLista(){
    this.service.getServicios()
    .subscribe(
     (data) => { // Success
       this.items = data['data'];               
     },
     (error) =>{
       console.error(error);
     }
   )
 }

  Manicure(){
    this.navCtrl.push(CatalogomanicurePage);
  }
  Pedicure(){
    this.navCtrl.push(CatalogopedicurePage);
  }
  Sistema(){
    this.navCtrl.push(CatalogosistemaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }

}
