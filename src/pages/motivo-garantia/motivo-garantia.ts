import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ReclamoService } from '../../providers/reclamo.service';



/**
 * Generated class for the MotivoGarantiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motivo-garantia',
  templateUrl: 'motivo-garantia.html',
})
export class MotivoGarantiaPage {
  items: any;

  
 
  
    constructor( private service:ReclamoService ,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public alertCtrl: AlertController) {this.iniciarLista();
    }
  
      
    iniciarLista()

    {
      this.service.getReclamos().subscribe(
       (data) => { // Success
       
         this.items= data['data'];               
       },
       (error) =>{
         console.error(error);
       }
     )
   
  
  }
    Enviar() {
      const alert = this.alertCtrl.create({
        title: 'Solicitud enviada!',
        subTitle: 'Su solicitud de garantia sera evaluada y se emitira una respuesta via notificación',
        buttons: [{
          text: 'OK!',
          handler: () => {
            this.viewCtrl.dismiss();
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
    console.log('ionViewDidLoad MotivoGarantiaPage');
  }

}
