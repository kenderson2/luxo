import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, AlertController, ModalController, ViewController } from 'ionic-angular';
import { ToastService } from '../../providers/toast.service';
import { AlertService } from '../../providers/alert.service';
import { TipoParametroM } from '../../providers/tipo-parametroM.service';
import { DetalleServicioService } from '../../providers/detalle-servicio.service';
import {ManicuristaService} from '../../providers/manicurista.service';
import { MotivosRechazoCitaPage } from '../motivos-rechazo-cita/motivos-rechazo-cita';
import { HomePage } from '../home/home';


/**
 * Generated class for the SolicitudCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud-cita',
  templateUrl: 'solicitud-cita.html',
})
export class SolicitudCitaPage {
  @ViewChild('solicitudSlider') 
  @ViewChild(Nav) nav: Nav;
  solicitudSlider: any;
  manicurista: any;
  hora: any;
  tipos: any[];
  items: any;
  items2: any[];
  manicuristas: any[];
  servicio: any[];
  a:number;
  aux:any;
  presupuesto:number=0;
  horas = ['08:00 am','09:00 am', '10:00 am','11:00 am','01:00 pm','02:00 pm','03:00 pm','04:00 pm'];
  
  constructor(public alertCtrl: AlertController, public alertService: AlertService,
    public toastCtrl: ToastService, public modalCtrl: ModalController, public viewCtrl: ViewController,
    public service: TipoParametroM,public service2: DetalleServicioService, private service3: ManicuristaService) {
      this.iniciarLista();
      this.iniciarLista3();
  }

  
  iniciarLista(){
    this.service.getTipoParametroM()
    .subscribe(
     (data) => { // Success
       this.items = data['data'];     
       console.log(data);          
     },
     (error) =>{
       console.error(error);
     }
   )
 }
 
 iniciarLista2(a){
  this.service2.getDetallesPorServicio(a)
  .subscribe(
   (data) => { // Success
     this.items2 = data['data'];     
     console.log(data); 
     console.log(this.items2);         
   },
   (error) =>{
     console.error(error);
   }
 )
}

iniciarLista3(){
  this.service3.getManicurista()
  .subscribe(
   (data) => { // Success
     this.manicuristas = data['data'];     
     console.log(data);          
   },
   (error) =>{
     console.error(error);
   }
 )
}


calcularPresupuesto(){
  let acum:number=0;
  for(let i=0;i<this.tipos.length;i++){
    this.aux=this.items2.find(servicio => servicio.id == this.tipos[i]);
    acum=acum+this.aux.precio;
  }
  this.presupuesto=acum;
}




  next(){
    this.solicitudSlider.slideNext();
  }
  save() {    
    const alert = this.alertCtrl.create({
      title: 'Seguro de enviar la solicitud?',
      message: 'Su cita se agendara según los datos suministrados en la solicitud',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            this.viewCtrl.dismiss()
          }
        },
        {
          text: 'Registrar',
          handler: () => {
            this.nav.setRoot(HomePage)
          }
        }
      ]
    });

    alert.present();
  }
cancelar(){
    const alert = this.alertCtrl.create({
    title: 'Seguro de cancelar la solicitud?',
     // message: 'Su cita se agendara según los datos suministrados en la solicitud',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.openModal(MotivosRechazoCitaPage)
          }
        },
        {
          text: 'No',
          handler: () => {
            this.nav.setRoot(HomePage)
          }
        }        
      ]
      });
    alert.present(); 
  }
  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' }).present();
  }
  prev(){
    this.solicitudSlider.slidePrev();
}

public localDate: Date = new Date();
  public initDate: Date = new Date();
  public initDate2: Date = new Date(2015, 1, 1);
  
  public min: Date = new Date()
  public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));

  public disabledDates: Date[] = [new Date(2018, 3, 1), new Date(2018, 3, 3), new Date(2018, 3, 5)];
public markDates: Date[] = [new Date(2018, 3, 2), new Date(2018, 3, 4), new Date(2018, 3, 6)];

setDate(date: Date) {
  console.log(date);
  this.initDate = date;
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudCitaPage');
  }

  itemView(tipos){
    console.log('Seleccionado:');
    console.log(tipos);
    this.tipos = tipos;
  }

}
