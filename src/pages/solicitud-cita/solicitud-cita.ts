import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { ToastService } from '../../providers/toast.service';
import { AlertService } from '../../providers/alert.service';
import { HomePage } from '../home/home';
import { MotivosRechazoCitaPage } from '../motivos-rechazo-cita/motivos-rechazo-cita';

/**
 * Generated class for the SolicitudCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud-cita',
  templateUrl: 'solicitud-cita.html',
})
export class SolicitudCitaPage {
  @ViewChild('solicitudSlider') solicitudSlider: any;
  servicio: any;
  manicurista: any;
  presupuesto = {
    monto:'0 BsF'
  };

  servicios = ['Manicure', 'Pedicure', 'Sistema de uñas', 'Promoción'];
  manicuristas = ['Maria Perez', 'Luisa Diaz', 'Paula Ramos', 'Maria Rojas'];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public alertService: AlertService,
    public toastCtrl: ToastService, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  next(){
    this.solicitudSlider.slideNext();
  }
  save() {    
    const alert = this.alertCtrl.create({
      title: 'Seguro de enviar la solicitud?',
      message: 'Su cita se agendara según los datos suministrados en la solicitud',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            this.viewCtrl.dismiss()
          }
        },
        {
          text: 'Registrar',
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
    title: 'Seguro de cancelar la solicitud?',
     // message: 'Su cita se agendara según los datos suministrados en la solicitud',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.openModal(MotivosRechazoCitaPage)
          }
        },
        {
          text: 'No',
          handler: () => {
            this.viewCtrl.dismiss()
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
    console.log('ionViewDidLoad SolicitudCitaPage');
  }

}
