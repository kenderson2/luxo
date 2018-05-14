import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import {SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';
import { NegocioService } from '../../providers/negocio.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  searchQuery: string = '';
  items: any[];
  constructor(public navCtrl: NavController,private service: NegocioService) {
    this.iniciarLista();
  }
  iniciarLista(){
    this.service.getNegocio().subscribe(
     (data) => { // Success
     
       this.items= data['data'];               
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
  }}


  
