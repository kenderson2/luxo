import { ToastService } from '../../providers/toast.service';
import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController} from 'ionic-angular';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';
import { ViewServicioPage } from '../view-servicio/view-servicio';
import { PreferenciasPage } from '../preferencias/preferencias';


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
    fecnac: '24/01/1993',
    dir: ' ',
    ciudad: 'Barquisimeto',
    estado: 'Lara',
    tlfn: '+58 4245356902',
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

  detalle(){
    this.navCtrl.push(ViewServicioPage);
  }
  
  preferencias(){
    this.navCtrl.push(PreferenciasPage);
  }

}
