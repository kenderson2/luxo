import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CatalogomanicurePage } from '../catalogomanicure/catalogomanicure';
import { CatalogopedicurePage } from '../catalogopedicure/catalogopedicure';
import { CatalogosistemaPage } from '../catalogosistema/catalogosistema';

import { ServicioService } from '../../providers/servicio.service';
import { ParametroService } from '../../providers/parametro.service';

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
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private service: ServicioService,
     private service2:ParametroService) {
    this.iniciarLista();
  }

  items :any[];
  items2 : any[];

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

 detalle(id_tipo_parametro){
  console.log("recibieno el id" + id_tipo_parametro);
    this.service2.getParametro(id_tipo_parametro)
    .subscribe(
     (data) => { // Success
       this.items2 = data['data'];     
       console.log(data);          
     },
     (error) =>{
       console.error(error);
     }
   )
   this.navCtrl.push(CatalogomanicurePage, {id: id_tipo_parametro} )
 

 }

/*   Manicure(){
    this.navCtrl.push(CatalogomanicurePage);
  }
  Pedicure(){
    this.navCtrl.push(CatalogopedicurePage);
  }
  Sistema(){
    this.navCtrl.push(CatalogosistemaPage);
  } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }

}
