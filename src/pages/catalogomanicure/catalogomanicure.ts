import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';
/**
 * Generated class for the CatalogomanicurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogomanicure',
  templateUrl: 'catalogomanicure.html',
})





export class CatalogomanicurePage {
  searchQuery: string = '';
  items: any[];
  iniciarLista(){
    this.items = [
       {
         name:'Limpieza',
         img:'assets/imgs/limpieza.jpg',
         descripcion:'Limpia los residuos que está dentro de las puntas de tus uñas de tus manos, y se cortan si el cliente lo desea '
   
       },
       {
         name:'Masajes',
         img:'assets/imgs/masajemanos.jpg',
         descripcion:'Consiste en un breve Masaje , sobre el area alrededor de las uñas ',
   
       },
       {
         name:'Aplicacion de Esmalte Tradicional ',
         img:'assets/imgs/esmaltemanos.jpeg',
         descripcion:'Consiste en una aplicacion Basica  de una capa de pintura Tradicional',
   
       },
       {
        name:'Aplicacion de Esmalte Permanente ',
        img:'assets/imgs/permanenteuña.jpg',
        descripcion:'Consiste en una aplicacion de un Esmalte permante,con varias capas para una larga duraccion',
  
      },
      {
        name:'Aplicacion de Stycker ',
        img:'assets/imgs/styker.jpg',
        descripcion:'Consiste en colocar Stycker de la preferencia el cliente y arriba una capa de fijador de esmalte ',
  
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

