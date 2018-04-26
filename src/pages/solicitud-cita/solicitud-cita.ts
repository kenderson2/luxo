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
  manicurista: any;
  hora: any;
  tipos: any;
  presupuesto = {
    monto:'0 BsF'
  };
  horas = ['08:00 am','09:00 am', '10:00 am','11:00 am','01:00 pm','02:00 pm','03:00 pm','04:00 pm'];
  servicios: any = [{
    "id": "1",
    "nombre": "Manicure",
    "tipos": [{
      "id": "1",
      "nombre": "Limpieza"}, 
      {
        "id": "2",
        "nombre": "Aplicación de esmalte"
      },
      {
        "id":"3",
        "nombre": "Decoración"
      }, {
        "id": "4",
        "nombre": "Servicio completo"
      }]
  }, {
    "id": "1",
    "nombre": "Pedicure",
    "tipos": [{
      "id": "1",
      "nombre": "Limpieza"}, 
      {
        "id": "2",
        "nombre": "Aplicación de esmalte"
      },
      {
        "id":"3",
        "nombre": "Decoración"
      }, {
        "id": "4",
        "nombre": "Servicio completo"
      }]
  }, {
    "id": "1",
    "nombre": "Sistema de Uñas",
    "tipos": [{
      "id": "1",
      "nombre": "Gel"}, 
      {
        "id": "2",
        "nombre": "Acrigel"},
      {
        "id": "3",
        "nombre": "Esculpida"
      },
      {
        "id":"4",
        "nombre": "Mantenimiento"
      }]
  }
  ];

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

  addServicio() {
  	console.log('Agregar Servicios');
  	this.servicios.push();
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
  prev(){
    this.solicitudSlider.slidePrev();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudCitaPage');
  }

  itemView(tipos){
    console.log('Seleccionado:');
    console.log(tipos);
    this.tipos = tipos;
  }

}
