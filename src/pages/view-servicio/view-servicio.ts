import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MotivoGarantiaPage } from '../motivo-garantia/motivo-garantia';
import { CalificarPage } from '../calificar/calificar';
import { HomePage } from '../home/home';
/**
 * Generated class for the ViewServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-servicio',
  templateUrl: 'view-servicio.html',
})
export class ViewServicioPage {


  servicio = {
    title: 'Manicure',
    desc:'Manicure con decoración animal print en tonos rosas y gris.',
    fecha: '09/05/2018',
    manicurista: 'Maria Perez',
    calificacion: '0',
  }

  calificar(){



    this.openModal(CalificarPage);

  }
  Enviar(){

  }
  garantia(){
    this.openModal(MotivoGarantiaPage);
  }
  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' }).present();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewServicioPage');
  }

}
