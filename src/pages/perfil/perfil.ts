import { ToastService } from '../../providers/toast.service';
import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController} from 'ionic-angular';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';
<<<<<<< HEAD
import { ViewServicioPage } from '../view-servicio/view-servicio';
import { PreferenciasPage } from '../preferencias/preferencias';
=======
>>>>>>> b6312e2ae6f86b33044cfa4f519cc7e7b7550cbe


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  posts = [
    {
      name: 'Manicure',
      text: `Manicure con decoración animal print en tonos rosas y gris.`,
      date: '5 de Noviembre, 2017',
      timestamp: '4 month ago'
    },
    {
      name: 'Pedicure',
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: '23 de Octubre, 2016',
      timestamp: '30d ago'
    },
    {
      name: 'Sistema de uñas',
      date: '28 Junio de 2016',
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
      timestamp: '4mo ago'
    },
  ];

  user = {
    name: 'Nury',
    apellido: 'Amaro',
    profileImage: '../assets/imgs/nury.jpg',
    followers: 456,
    following: 10,
    tweets: 3,
    fecnac: '24/01/1993',
    dir: 'Barquisimeto',
    tlfn: '04245356902',
    twitter: 'nuryC',
    edad: 25,
  };
  configurar() {
    this.navCtrl.push(ProfileSettingsPage);
}    

  constructor(public navCtrl: NavController, public toastCtrl: ToastService, public viewCtrl: ViewController) { }

  ionViewDidLoad() {
    console.log('Hello Perfil Page');
  }

  imageTapped(post) {
    this.toastCtrl.create('Post image clicked');
  }

<<<<<<< HEAD
  detalle(){
    this.navCtrl.push(ViewServicioPage);
  }
  
  preferencias(){
    this.navCtrl.push(PreferenciasPage);
=======
  comment(post) {
    this.toastCtrl.create('Comments clicked');
  }

  like(post) {
    this.toastCtrl.create('Like clicked');
>>>>>>> b6312e2ae6f86b33044cfa4f519cc7e7b7550cbe
  }

}
