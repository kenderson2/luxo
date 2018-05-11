import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';
import { ImagePicker } from '@ionic-native/image-picker';
import { EstadoService } from '../../providers/estado.service';
import { CiudadService } from '../../providers/ciudad.service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public viewCtrl: ViewController, private imagePicker: ImagePicker, private service: EstadoService, private service2: CiudadService) {
      this.iniciarLista();
      this.iniciarLista2();
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
   iniciarLista2(){
    this.service2.getCiudades()
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
  user = {
    name: 'Nury',
    apellido: 'Amaro',
    imageUrl: 'assets/imgs/nury.jpg'
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

  itemView(entidad,data){
    console.log('Seleccionado:');
    console.log(data);
    if(entidad == 'items2') this.items2 = data;
    if(entidad == 'item2') this.body.id= data.id;
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
  }






}
