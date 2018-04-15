import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the MotivoGarantiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motivo-garantia',
  templateUrl: 'motivo-garantia.html',
})
export class MotivoGarantiaPage {
  motivo: any;
  
    motivos = ['Perdida de esmalte', 'Se cayo la decoración', 'Se cayo una/s uña/s']
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public alertCtrl: AlertController) {
    }
  
    Enviar() {
      const alert = this.alertCtrl.create({
        title: 'Solicitud enviada!',
        subTitle: 'Su solicitud de garantia sera evaluada y se emitira una respuesta via notificación',
        buttons: [{
          text: 'OK!',
          handler: () => {
            this.viewCtrl.dismiss();
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
    console.log('ionViewDidLoad MotivoGarantiaPage');
  }

}
