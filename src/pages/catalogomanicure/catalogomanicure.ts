import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';
import { ServicioService } from '../../providers/servicio.service';
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
  constructor(public navCtrl: NavController,private service: ServicioService) {
    this.iniciarLista();
  }
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
  

   getItems(ev: any) {
    // Reset items back to all of the items
    this.iniciarLista();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  Solicitar(){
    this.navCtrl.push(SolicitudCitaPage);
  }
 
  
}

