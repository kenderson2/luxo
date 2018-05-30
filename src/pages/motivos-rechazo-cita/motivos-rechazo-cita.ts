import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import {TipoMotivoCancelacionService} from '../../providers/tipo-motivo-cancelacion.service';
import {MotivoCancelacionService} from '../../providers/motivo-cancelacion.service';
import { SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';

/**
 * Generated class for the MotivosRechazoCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motivos-rechazo-cita',
  templateUrl: 'motivos-rechazo-cita.html',
}) 
export class MotivosRechazoCitaPage {
  motivos = [];
  id: any;
  motivo:any;
  descripcion:any;
 //formDesc: FormControl;
  objetoRecibido: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
  public alertCtrl: AlertController, public formBuilder: FormBuilder, private service: TipoMotivoCancelacionService,
  private serv: MotivoCancelacionService) {
    this.iniciarLista();
    this.formDesc = this.createformContact();
    this.objetoRecibido = navParams.data;
    
      console.log(this.navParams.get('a'))
  }

  iniciarLista(){
    this.service.getMotivo().subscribe(
     (data) => { // Success
     
       this.motivos= data['data'];               
     },
     (error) =>{
       console.error(error);
     }
   )
 }
 
 formDesc: FormGroup;
  private createformContact(){
    return this.formBuilder.group({
    descripcion: ['', Validators.required],
  });
}

  Enviar() {
    let f = {id_tipo_motivo_cancelacion:this.motivo,descripcion: this.descripcion,servicios:this.objetoRecibido};
     console.log(f);   
      this.serv.postCancelacion(f)
          .subscribe(
            rs => this.showAlert(),
            er => console.log(er),
            () => console.log('ok')
          )
  }
  
  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'Información enviada!',
      subTitle: 'Disculpe las molestias ocasionadas, esperamos mejorar gracias a su opinion',
      buttons: [{
        text: 'OK!',
        handler: () => {
          this.navCtrl.setRoot(HomePage)
        }
      }
    ]
    });
    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MotivosRechazoCitaPage');
    }

}
