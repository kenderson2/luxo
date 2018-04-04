import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreferenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferencias',
  templateUrl: 'preferencias.html',
})
export class PreferenciasPage {

  items = [
    {
      title: 'First Cup',
      place: 'Madison Square',
      date: '05/06/2016'
    },
    {
      title: 'Season',
      place: 'Hooli',
      date: '15/03/2016'
    },
    {
      title: '2nd Season',
      place: 'Castelão',
      date: '05/12/2015'
    },
  ];
  user = {
    profileImage: '../assets/imgs/nury.jpg',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferenciasPage');
  }

}
