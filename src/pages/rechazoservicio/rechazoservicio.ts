import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController } from 'ionic-angular';
import {HomePage } from '../home/home';
import { MicalendarioPage } from '../micalendario/micalendario';

/**
 * Generated class for the RechazoservicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rechazoservicio',
  templateUrl: 'rechazoservicio.html',
})
export class RechazoservicioPage {
 motivo: any;
 motivos = ['No puedo asistir', 'Ya no quiero el servicio', 'Necesito cambiar la fecha', 'Sin especificar']

  enviar()
  {
    let alert = this.alertCtrl.create({
      title:    'Mensaje',
      subTitle: 'Su opinión ha sido enviada exitosamente!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          
            this.navCtrl.pop();
          }
        },
              
      ]
      });
    alert.present(); 
  }
  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' }).present();
  }
     

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RechazoservicioPage');
  }

}
