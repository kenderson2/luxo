import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../providers/toast.service';

/**
 * Generated class for the ServiciosRecibidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios-recibidos',
  templateUrl: 'servicios-recibidos.html',
})
export class ServiciosRecibidosPage {

  posts = [
    {
      name: 'Manicure',
      text: `Manicure con decoración animal print en tonos rosas y gris.`,
      date: '5 de Noviembre, 2017',
    },
    {
      name: 'Pedicure',
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: '23 de Octubre, 2016',
    },
    {
      name: 'Sistema de uñas',
      date: '28 Junio de 2016',
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
    },
  ];

  items = [
    {
      title: 'Manicure',
      text: 'Manicure con decoración animal print en tonos rosas y gris.',
      date: '05/06/2016'
    },
    {
      title: 'Season',
      text: 'Hooli',
      date: '15/03/2016'
    },
    {
      title: '2nd Season',
      text: 'Castelão',
      date: '05/12/2015'
    },
  ];


  constructor(public navCtrl: NavController, public toastCtrl: ToastService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosRecibidosPage');
  }

}
