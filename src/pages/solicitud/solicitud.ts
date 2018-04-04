import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the SolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud',
  templateUrl: 'solicitud.html',
})
export class SolicitudPage {
  Formcita: FormGroup;
  servicio: any;
  manicurista: any;

  servicios = ['Manicure', 'Pedicure', 'Sistema de uñas'];
  manicuristas = ['Maria Perez', 'Luisa Diaz', 'Paula Ramos', 'Maria Rojas']

  
  solicitar() {
  }
  cancelar() {
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.Formcita = formBuilder.group({
      fechaCita: ['', Validators.required] 
  });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudPage');
  }

}
