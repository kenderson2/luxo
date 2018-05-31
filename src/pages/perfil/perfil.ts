import { ToastService } from '../../providers/toast.service';
import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController} from 'ionic-angular';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';
import { ViewServicioPage } from '../view-servicio/view-servicio';
import { PreferenciasPage } from '../preferencias/preferencias';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../providers/user.service';
import { Usuario } from '../../providers/usuario';
import { SPrestadoService } from '../../providers/sprestado.service';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  
  loggedIn:boolean=false;
  usuario=[];
  user :any;
  searchQuery: string = '';
  items: any[];
 
 
  configurar() {
    this.navCtrl.push(ProfileSettingsPage);
}    

  constructor(private service1: SPrestadoService,public navCtrl: NavController, public toastCtrl: ToastService, public viewCtrl: ViewController, private auth : AuthService, private userauth:UserService) { 

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
    console.log('Hello Perfil Page');

    if(this.auth.checkSession()){
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
