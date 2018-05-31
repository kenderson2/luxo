import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MotivoGarantiaPage } from '../motivo-garantia/motivo-garantia';
import { CalificarPage } from '../calificar/calificar';
import { HomePage } from '../home/home';
import { SPrestadoService } from '../../providers/sprestado.service';
/**
 * Generated class for the ViewServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-servicio',
  templateUrl: 'view-servicio.html',
})
export class ViewServicioPage {


  
  items: any[];

  

  calificar(){



    this.openModal(CalificarPage);

  }
  Enviar(){

  }
  garantia(){
    this.openModal(MotivoGarantiaPage);
  }
  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' }).present();
  }
  
  constructor(private service1: SPrestadoService,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  


  
  this.iniciarLista();}
  iniciarLista()

  {
    this.service1.getServiciop().subscribe(
     (data) => { // Success
     
       this.items= data['data'];               
     },
     (error) =>{
       console.error(error);
     }
   )
 

}

ionViewDidLoad() {
  console.log('ionViewDidLoad ViewServicioPage');
}

}
  

