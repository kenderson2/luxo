import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { ServiciosRecibidosPage } from '../servicios-recibidos/servicios-recibidos';
import { PreferenciasPage } from '../preferencias/preferencias';
import { SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';
=======
import {PerfilPage} from '../perfil/perfil';
import {PromocionesPage} from '../promociones/promociones';
>>>>>>> b6312e2ae6f86b33044cfa4f519cc7e7b7550cbe

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  servicios() {
      this.navCtrl.push(ServiciosRecibidosPage);
  }    

  preferencias() {
    this.navCtrl.push(PreferenciasPage);
  }

  solicitud() {
    this.navCtrl.push(SolicitudCitaPage);
=======
	
  Promocion(){
    this.navCtrl.push(PromocionesPage);
  }

  Perfil(){
    this.navCtrl.push(PerfilPage);
>>>>>>> b6312e2ae6f86b33044cfa4f519cc7e7b7550cbe
  }

  constructor(public navCtrl: NavController) {

  }

}
