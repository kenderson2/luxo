import { ToastService } from '../../providers/toast.service';
import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController} from 'ionic-angular';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';
import { ViewServicioPage } from '../view-servicio/view-servicio';
import { PreferenciasPage } from '../preferencias/preferencias';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../providers/user.service';
import { Usuario } from '../../providers/usuario';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  loggedIn:boolean=false;
  usuario=[];
  user :any;
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

  
  configurar() {
    this.navCtrl.push(ProfileSettingsPage);
}    

  constructor(public navCtrl: NavController, public toastCtrl: ToastService, public viewCtrl: ViewController, private auth : AuthService, private userauth:UserService) { }

  ionViewDidLoad() {
    console.log('Hello Perfil Page');
    if(this.auth.checkSession){
      this.userauth.getUsuario()
      .subscribe(
        (data) => { // Success
          this.user=JSON.parse(data.text());
          this.usuario = this.user['data'];               
          console.log(this.usuario)
        },
        (error) =>{
          console.error(error);
        }
      )
    }


    
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
