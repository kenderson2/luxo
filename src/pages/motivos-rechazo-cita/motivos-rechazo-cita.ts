import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the MotivosRechazoCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motivos-rechazo-cita',
  templateUrl: 'motivos-rechazo-cita.html',
})
export class MotivosRechazoCitaPage {
  motivo: any;

  motivos = ['Monto muy alto', 'Servicios muy caros', 'Fecha no disponible', 'Manicurista no disponible',
  'Sin especificar']

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
  public alertCtrl: AlertController) {
  }

  Enviar() {
    const alert = this.alertCtrl.create({
      title: 'Mensaje Enviado!',
      subTitle: 'Con tu ayuda esperamos mejorar para una proxima oportunidad',
      buttons: [{
        text: 'OK!',
        handler: () => {
          this.navCtrl.setRoot(HomePage)
        }
      }
    ]
    });
    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MotivosRechazoCitaPage');
  }

}
