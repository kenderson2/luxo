import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiciosRecibidosPage } from '../servicios-recibidos/servicios-recibidos';
import { PreferenciasPage } from '../preferencias/preferencias';
import { SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  servicios() {
      this.navCtrl.push(ServiciosRecibidosPage);
  }    

  preferencias() {
    this.navCtrl.push(PreferenciasPage);
  }

  solicitud() {
    this.navCtrl.push(SolicitudCitaPage);
  }

  constructor(public navCtrl: NavController) {

  }

}
