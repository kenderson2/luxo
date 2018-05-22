import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewServicioPage } from '../view-servicio/view-servicio';

/**
 * Generated class for the CalificarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calificar',
  templateUrl: 'calificar.html',
})
export class CalificarPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




  starClicked(value){
    console.log("Rated :", value);
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalificarPage');
  }



  calificar(){
    this.navCtrl.push(ViewServicioPage);
  }


}
