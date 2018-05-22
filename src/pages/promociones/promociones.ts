import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';
import { PromocionService } from '../../providers/promocion.service';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-promociones',
  templateUrl: 'promociones.html'
})
export class PromocionesPage {
  searchQuery: string = '';
  items: any[];
  constructor(public navCtrl: NavController,private service: PromocionService) {
    this.iniciarLista();
  }
  iniciarLista(){
    this.service.getPromo().subscribe(
     (data) => { // Success
     
       this.items= data['data'];               
     },
     (error) =>{
       console.error(error);
     }
   )
 }

precionuevo(){
  


}
Solicitar(){
  this.navCtrl.push(SolicitudCitaPage);
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



    
  }}


  





