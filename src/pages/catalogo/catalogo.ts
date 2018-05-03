import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CatalogomanicurePage } from '../catalogomanicure/catalogomanicure';
import { CatalogopedicurePage } from '../catalogopedicure/catalogopedicure';
import { CatalogosistemaPage } from '../catalogosistema/catalogosistema';

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

  Manicure(){
    this.navCtrl.push(CatalogomanicurePage);
  }
  Pedicure(){
    this.navCtrl.push(CatalogopedicurePage);
  }
  Sistema(){
    this.navCtrl.push(CatalogosistemaPage);
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }

}
