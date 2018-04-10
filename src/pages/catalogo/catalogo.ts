import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

<<<<<<< HEAD
import { HomePage } from '../home/home';
import { CatalogomanicurePage } from '../catalogomanicure/catalogomanicure';
import { CatalogopedicurePage } from '../catalogopedicure/catalogopedicure';
import { CatalogosistemaPage } from '../catalogosistema/catalogosistema';

/**
 * Generated class for the CatalogoPage page.
=======
/**
 * Generated class for the GaleriaPage page.
>>>>>>> 7e6dc865de370e6dbba51f813b773814b265a731
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

<<<<<<< HEAD
  Manicure(){
    this.navCtrl.push(CatalogomanicurePage);
  }
  Pedicure(){
    this.navCtrl.push(CatalogopedicurePage);
  }
  Sistema(){
    this.navCtrl.push(CatalogosistemaPage);
  }


=======
>>>>>>> 7e6dc865de370e6dbba51f813b773814b265a731
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }

<<<<<<< HEAD
=======
  
>>>>>>> 7e6dc865de370e6dbba51f813b773814b265a731
}
