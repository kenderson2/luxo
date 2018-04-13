import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  razones:any;
  comunicaciones:any = [{
    "id": 1,
    "nombre": "Comentario",
    "razones": [{
       "id": 1,
       "nombre": "Servicio"
    } , {
       "id": 2,
       "nombre": "Atención"
    }, {
      "id": 3,
      "nombre": "Ambiente/Establecimiento"
    }]
  } , {
    "id": 1,
    "nombre": "Quejas",
    "razones": [{
       "id": 1,
       "nombre": "La manicurista llego tarde"
    } , {
       "id": 2,
       "nombre": "Tuve que reprogramar la cita"
    }, {
      "id": 3,
      "nombre": "La recepcionista es pedante"
    }, {
      "id": 4,
      "nombre": "El lugar huele mucho a pintura"
    }]
  } , {
    "id": 1,
    "nombre": "Sugerencias",
    "razones": [{
       "id": 1,
       "nombre": "La recepcionista debe mejorar la atencion al cliente"
    } , {
       "id": 2,
       "nombre": "Agregar un servicio"
    }, {
      "id":3,
      "nombre": "Colocar música en el establecimiento"
    }]
  }]

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
  }

  itemView(razones){
    console.log('Seleccionado:');
    console.log(razones);
    this.razones = razones;
  }

  enviar(){
    let alert = this.alertCtrl.create({
      title:    'Mensaje',
      subTitle: 'Su opinión ha sido enviada exitosamente!',
      buttons:  ['OK']
    });
    alert.present();
  }


}
