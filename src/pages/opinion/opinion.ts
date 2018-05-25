import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ContactoService } from '../../providers/contacto.service';
import { TipocService } from '../../providers/tipoc.service';
import { CategoriaContactoService } from '../../providers/categoria-contacto.service';
import { UserService } from '../../providers/user.service';
import { AuthService } from '../../services/auth.service';

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
  usuario:any[];
  motivo:any;
  razon:any;
  comentario:any;

  constructor(public navCtrl: NavController,private service: ContactoService,private service2: TipocService,public navParams: NavParams,
    public alertCtrl: AlertController, private service3: CategoriaContactoService, public auth:AuthService,public userauth:UserService
 )
  {
    this.iniciarLista();
    this.iniciarLista1();
  }
  
  public body:any = {
    "id":null,
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

enviar() {
  let f = {id_categoria_contacto:this.razon,id_tipo_contacto:this.motivo,descripcion:this.comentario};
   console.log(f);   
    this.service.postContacto(f)
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
        this.navCtrl.setRoot(OpinionPage)
      }
    }
  ]
  });
  alert.present();
}

  fechanac:any;
  direccion:any;
  telefono:any;
  ciudad:any;
  estado:any;
  id:any;
  user = {
    name: 'Fernanda',
    apellido: 'Torres',
    imageUrl: 'assets/imgs/fernanda.jpg'
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad OpinionPage');
    if(this.auth.checkSession){
      this.userauth.getUsuario()
      .subscribe(
        (data) => { // Success
          this.user=JSON.parse(data.text());
          this.usuario = this.user['data'];
          this.id=this.usuario['id'];
          this.fechanac=this.usuario['fecha_nacimiento'];  
          this.direccion=this.usuario['direccion'];
          this.telefono=this.usuario['telefono'];
          this.estado=this.usuario['estado'];
          this.ciudad=this. usuario['ciudad'];
        },
        (error) =>{
          console.error(error);
        }
      )
    }
  }
}
