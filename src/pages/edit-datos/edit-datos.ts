import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';
import { ImagePicker } from '@ionic-native/image-picker';
import { EstadoService } from '../../providers/estado.service';
import { CiudadService } from '../../providers/ciudad.service';

import { UserService } from '../../providers/user.service';
import { AuthService } from '../../services/auth.service';
/**
 * Generated class for the EditDatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-datos',
  templateUrl: 'edit-datos.html',
})
export class EditDatosPage {
  searchQuery: string = '';
  items: any[];
  items2: any [];
  ciudades:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public viewCtrl: ViewController, private imagePicker: ImagePicker, private service: EstadoService, private service2: CiudadService,
    public auth:AuthService,public userauth:UserService) {
      this.iniciarLista();
      //this.iniciarLista2();
    }

    public body:any = {
      "id":null,
    }

    iniciarLista(){
      this.service.getServicios()
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

   // este metodo se debe cambiar a getCiudadesPorEstado(ciudades)
   iniciarLista2(ciudades){
    this.service2.getCiudadesPorEstado(ciudades)
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

   

  img1: any;
  sexo: any;
  fechanac:any;
  direccion:any;
  telefono:any;
  ciudad:any;
  estado:any;
  profilePicture: string;
  imagen:any;
  images: any = [];
  usuario:any[];
  user = {
    name: 'Fernanda',
    apellido: 'Torres',
    imageUrl: 'assets/imgs/fernanda.jpg'
  };

  sexos = ['Femenino', 'Masculino'];

   /*= [{
    "id": 1,
    "nombre": "Lara",
    "ciudades": [{
       "id": 1,
       "nombre": "Barquisimeto"
    } , {
       "id": 2,
       "nombre": "Cabudare"
    }, {
      "id": 3,
      "nombre": "Duaca"
    }]
  } , {
    "id": 1,
    "nombre": "Metalicas",
    "ciudades": [{
       "id": 1,
       "nombre": "Bronce"
    } , {
       "id": 2,
       "nombre": "Rosa Gold"
    }, {
      "id": 3,
      "nombre": "Dorado"
    }, {
      "id": 4,
      "nombre": "Morado"
    }]
  } , {
    "id": 1,
    "nombre": "Crema",
    "ciudades": [{
       "id": 1,
       "nombre": "Beige"
    } , {
       "id": 2,
       "nombre": "Rosa Vintage"
    }, {
      "id":3,
      "nombre": "Azul cielo"
    }]
  },{
    "id": 1,
    "nombre": "Perlado",
    "ciudades": [{
       "id": 1,
       "nombre": "Beige"
    } , {
       "id": 2,
       "nombre": "Blanco perla"
    }, {
      "id":3,
      "nombre": "Coral"
    }]
  }, {
    "id": 1,
    "nombre": "Neon",
    "ciudades": [{
       "id": 1,
       "nombre": "Verde"
    } , {
       "id": 2,
       "nombre": "Naranja"
    }, {
      "id":3,
      "nombre": "Fucsia"
    }]
  }, {
    "id": 1,
    "nombre": "Brillo color",
    "ciudades": [{
       "id": 1,
       "nombre": "Beige"
    } , {
       "id": 2,
       "nombre": "Rosado"
    }, {
      "id":3,
      "nombre": "Gris"
    }]
  }, {
    "id": 1,
    "nombre": "Escarchado",
    "ciudades": [{
       "id": 1,
       "nombre": "Azul"
    } , {
       "id": 2,
       "nombre": "Morado"
    }, {
      "id":3,
      "nombre": "Dorado"
    }]
  }, {
    "id": 1,
    "nombre": "Craquelado",
    "ciudades": [{
       "id": 1,
       "nombre": "Blanco"
    } , {
       "id": 2,
       "nombre": "Verde manzana"
    }, {
      "id":3,
      "nombre": "Azul"
    }]
  }]*/


  itemView(ciudades){
    console.log('Seleccionado:');
    console.log(ciudades);
    //this.ciudades = ciudades;
    this.iniciarLista2(ciudades);
  }

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }

  updateProfileImage() {
  }
  
  
  save() {
    let f = {sexo :this.sexo,direccion:this.direccion,telefono:this.telefono};
     console.log(f);
   
      this.userauth.actualizarPerfil(f)
          .subscribe(
            rs => this.showAlert(),
            er => console.log(er),
            () => console.log('ok')
          )
    
  }
  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'Datos guardados!',
      subTitle: 'Sus datos fueron guardados satisfactoriamente',
      buttons: [{
        text: 'OK!',
        handler: () => {
          this.navCtrl.setRoot(ProfileSettingsPage)
        }
      }
    ]
    });
    alert.present();
  }

   
  dismiss() {
    this.viewCtrl.dismiss();
  }

  

  getPictures(){ 
    this.imagePicker.getPictures({
    }).then( results =>{
      console.log(results);
      for(let i=0; i < results.length;i++){
        this.images.push(results[i]);
      };
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDatosPage');
    if(this.auth.checkSession){
      this.userauth.getUsuario()
      .subscribe(
        (data) => { // Success
          this.user=JSON.parse(data.text());
          this.usuario = this.user['data'];
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
