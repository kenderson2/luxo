import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';

/**
 * Generated class for the CatalogosistemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogosistema',
  templateUrl: 'catalogosistema.html',
})
export class CatalogosistemaPage {
  searchQuery: string = '';
  items: any[];
  iniciarLista(){
    this.items = [
       {
         name:'Gel',
         img:'assets/imgs/gel.jpg',
         descripcion:' Es un gel acrílico UV reactivo que se endurece bajo luz ultravioleta.'
   
       },
    
       {
         name:'Acrílico ',
         img:'assets/imgs/acrilico.jpg',
         descripcion:'se hace una pasta que se endurece o fragua al contacto con el aire, formando una capa que se adhiere de inmediato a las uñas, blanqueándolas del desgaste constante que reciben al estar expuestas',
   
       },
       {
        name:'Esculpido',
        img:'assets/imgs/esculpido.jpg',
        descripcion:'Consiste en una aplicacion de un Esculpido',
  
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

