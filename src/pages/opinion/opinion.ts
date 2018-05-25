import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ContactoService } from '../../providers/contacto.service';
import { TipocService } from '../../providers/tipoc.service';
import { CategoriaContactoService } from '../../providers/categoria-contacto.service';


/**
 * Generated class for the OpinionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opinion',
  templateUrl: 'opinion.html',
})
export class OpinionPage {

  searchQuery: string = '';
  items: any[];
  items1: any[];
  motivo:any;
  razon:any;
  comentario:any;

  constructor(public navCtrl: NavController,private service: ContactoService,private service2: TipocService,public navParams: NavParams,
    public alertCtrl: AlertController, private service3: CategoriaContactoService
 )
  {
    this.iniciarLista();
    this.iniciarLista1();
  }
  iniciarLista(){
    this.service3.getContacto().subscribe(
     (data) => { // Success     
       this.items= data['data'];               
     },
     (error) =>{
       console.error(error);
     }
   )
 }

 iniciarLista1(){
  this.service2.getTipoc().subscribe(
   (data) => { // Success   
     this.items1= data['data'];               
   },
   (error) =>{
     console.error(error);
   }
 )
}

enviar(){
  let f = {id_categoria:this.razon,id_tipo_contacto:this.motivo};
    console.log(f);   
    this.service.postContacto(f)
  .subscribe(
  //  rs => this.showAlert(),
    er => console.log(er),
    () => console.log('ok')
  )
}
/*
showAlert(){
  const alert = this.alertCtrl.create({
    title: 'Opinión enviada!',
    subTitle: 'Gracias por darnos a conocer tu opinión, sera tomada en cuenta para el mejoramiento de la organización',
    buttons: [{
      text: 'OK!',
      handler: () => {
        this.navCtrl.setRoot(OpinionPage)
      }
    }
  ]
  });
  alert.present();
}
*/
  getItems(ev: any) {
    // Reset items back to all of the items
    this.iniciarLista();
    this.iniciarLista1();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
