import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { AlertService } from '../../providers/alert.service';
import { ToastService } from '../../providers/toast.service';
import { MotivosRechazoCitaPage } from '../motivos-rechazo-cita/motivos-rechazo-cita';
import { RechazoservicioPage } from '../rechazoservicio/rechazoservicio';
import { HomePage } from '../home/home';

/**
 * Generated class for the MicalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-micalendario',
  templateUrl: 'micalendario.html',
})
export class MicalendarioPage {
  citas = [{
    fecha: '28 de Abril, 2018',
    manicurista: 'Maria Perez',
    hora: '11:30 a.m',
    servicios: 'Manicure'
  },
{
  fecha: '5 de Mayo, 2018',
  manicurista: 'Maria Perez',
  hora: '11:30 a.m',
  servicios: 'Sistema de Uñas'
}]

  items: { name: string; img: string; descripcion: string; }[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public alertService: AlertService,
    public toastCtrl: ToastService, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }
  next()
  {
    const alert = this.alertCtrl.create({
title:'Notificacion',
message:'Gracias Por confiar en nuestros Servicios ',
buttons: [
  {
    text: 'Ok',
    handler: () => {
      this.navCtrl.setRoot(HomePage)
    }
  }        
]
});
alert.present(); 
}
  cancelar(){
    const alert = this.alertCtrl.create({
    title: 'Seguro de cancelar la cita?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.openModal(RechazoservicioPage)
          }
        },
        {
          text: 'No',
          handler: () => {
<<<<<<< HEAD
            this.navCtrl.pop()
=======
            this.navCtrl.setRoot(MicalendarioPage)
>>>>>>> 593bf669538c4fc399f742d99bdfda6239620f82
            console.log("ok")
          }
        }        
      ]
      });
    alert.present(); 
  }
  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' }).present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MicalendarioPage');
  }

}
