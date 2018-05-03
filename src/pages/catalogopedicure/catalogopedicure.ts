import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';

/**
 * Generated class for the CatalogopedicurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogopedicure',
  templateUrl: 'catalogopedicure.html',
})
export class CatalogopedicurePage {
  searchQuery: string = '';
  items: any[];
  iniciarLista(){
    this.items = [
       {
         name:'Limpieza',
         img:'assets/imgs/limpiezapies.jpg',
         descripcion:'Limpia los residuos que está dentro de las puntas de tus uñas de tus manos, y se cortan si el cliente lo desea '
   
       },
    
       {
         name:'Aplicacion de Esmalte Tradicional ',
         img:'assets/imgs/esmaltepies.jpg',
         descripcion:'Consiste en una aplicacion Basica  de una capa de pintura Tradicional',
   
       },
       {
        name:'Aplicacion de Esmalte Permanente ',
        img:'assets/imgs/esmaltepiespermanente.jpg',
        descripcion:'Consiste en una aplicacion de un Esmalte permante,con varias capas para una larga duraccion',
  
      },
 
     ];
   }

   getItems(ev: any) {
    // Reset items back to all of the items
    this.iniciarLista();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  Solicitar(){
    this.navCtrl.push(SolicitudCitaPage);
  }
  constructor(public navCtrl: NavController) {
    this.iniciarLista();
  }
  
}

