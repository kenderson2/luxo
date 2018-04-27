import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';

/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {

notificacion: any;


  public thumbnails: { title: string, image: string, ribbonText: string, class: string }[] = [
    { title: 'Sistema de uñas 30% de descuento', image: 'assets/imgs/imagen11.jpg', ribbonText: 'activa', class: 'sale' },
    { title: 'Manicure', image: 'assets/imgs/imagen13.jpg', ribbonText: '50% menos', class: 'cruzeiro' },
    { title: 'manicure 2x1', image: 'assets/imgs/promo1.jpg', ribbonText: 'Expirado', class: 'atletico' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.notificacion= "Promociones";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionesPage');
  }

  cita(){
    this.navCtrl.push(SolicitudCitaPage);
  }

}
