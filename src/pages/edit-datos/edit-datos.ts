import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

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

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }

  updateProfileImage() {
  }
  save() {
    const alert = this.alertCtrl.create({
      title: 'Datos guardados!',
      subTitle: 'Sus datos fueron guardados satisfactoriamente',
      buttons: [{
        text: 'OK!',
        handler: () => {
          this.navCtrl.setRoot(PerfilPage)
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
