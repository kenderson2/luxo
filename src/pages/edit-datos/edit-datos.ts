import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';

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
  img1: any;
  sexo: any;
  profilePicture: string;
  user = {
    name: 'Nury',
    apellido: 'Amaro',
    imageUrl: 'assets/imgs/nury.jpg'
  };

  sexos = ['Femenino', 'Masculino'];

  ciudades:any;
  estados:any = [{
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
  }]

  itemView(ciudades){
    console.log('Seleccionado:');
    console.log(ciudades);
    this.ciudades = ciudades;
  }

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }

  updateProfileImage() {
  }
  save() {
    //let f = {correo: this., contrasenna: this.loginForm.value.password};




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

  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.onload = (event:any) => { 
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;  
    let file: File = fileList[0];
    console.log(file);
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDatosPage');
  }






}
