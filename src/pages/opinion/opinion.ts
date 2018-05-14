import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ContactoService } from '../../providers/contacto.service';
import { TipocService } from '../../providers/tipoc.service';


/**
 * Generated class for the OpinionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opinion',
  templateUrl: 'opinion.html',
})
export class OpinionPage {


  
  searchQuery: string = '';
  items: any[];
  items1: any[];
  constructor(public navCtrl: NavController,private service: ContactoService,private service2: TipocService,public navParams: NavParams,
    public alertCtrl: AlertController
 )
  {
    this.iniciarLista();
    this.iniciarLista1();
  }
  iniciarLista(){
    this.service.getContacto().subscribe(
     (data) => { // Success
     
       this.items= data['data'];               
     },
     (error) =>{
       console.error(error);
     }
   )
 }

 iniciarLista1(){
  this.service2.getTipoc().subscribe(
   (data) => { // Success
   
     this.items1= data['data'];               
   },
   (error) =>{
     console.error(error);
   }
 )
}


enviar(){
  let alert = this.alertCtrl.create({
    title:    'Mensaje',
    subTitle: 'Su opinión ha sido enviada exitosamente!',
    buttons:  ['OK']
  });
  alert.present();
}


   getItems(ev: any) {
    // Reset items back to all of the items
    this.iniciarLista();
    this.iniciarLista1();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }}
