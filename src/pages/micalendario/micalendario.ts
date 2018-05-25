import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { AlertService } from '../../providers/alert.service';
import { ToastService } from '../../providers/toast.service';
import { MotivosRechazoCitaPage } from '../motivos-rechazo-cita/motivos-rechazo-cita';
import { RechazoservicioPage } from '../rechazoservicio/rechazoservicio';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../providers/user.service';
import { Usuario } from '../../providers/usuario';
import {AgendaService} from '../../providers/agenda.service';


/**
 * Generated class for the MicalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-micalendario',
  templateUrl: 'micalendario.html',
})
export class MicalendarioPage {
  usuario=[];
  user :any;
  citas:any[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public alertService: AlertService,
    public toastCtrl: ToastService, public modalCtrl: ModalController, public viewCtrl: ViewController,
    private auth : AuthService, private userauth:UserService, private agenda: AgendaService) {
      this.iniciarLista();
  }

  
  iniciarLista(){
    this.agenda.getCitas().subscribe(
     (data) => { // Success     
       this.citas= data['data'];               
     },
     (error) =>{
       console.error(error);
     }
   )
 }

  cancelar(){
    const alert = this.alertCtrl.create({
    title: 'Seguro de cancelar la cita?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.openModal(RechazoservicioPage)
          }
        },
        {
          text: 'No',
          handler: () => {
            this.navCtrl.setRoot(MicalendarioPage)
            console.log("ok")
          }
        }        
      ]
      });
    alert.present(); 
  }
  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MicalendarioPage');
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

}
