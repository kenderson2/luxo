import { ToastService } from '../../providers/toast.service';
import { AlertService } from '../../providers/alert.service';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EditDatosPage } from '../edit-datos/edit-datos';
import { EditPreferenciasPage } from '../edit-preferencias/edit-preferencias';

@IonicPage()
@Component({
  selector: 'page-profile-settings',
  templateUrl: 'profile-settings.html',
})

export class ProfileSettingsPage {
  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'https://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  currency: any;

  user = {
    name: 'Fernanda',
    apellido: 'Torres',
    imageUrl: 'assets/imgs/fernanda.jpg'
  };

  constructor(
    public alertService: AlertService,
    public toastCtrl: ToastService,
    public navCtrl: NavController,
  ) { }

  toggleNotifications() {
    if (this.enableNotifications) {
      this.toastCtrl.create('Notificaciones activadas.');
    } else {
      this.toastCtrl.create('Notificaciones desactivadas.');
    }
  }

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }

  updateProfileImage() {
  }

  Datos(){
    this.navCtrl.push(EditDatosPage);
  }
  
  preferencias(){
    this.navCtrl.push(EditPreferenciasPage);
  }

  cambio(){
    
  }

  logOut() {
    this.alertService.presentAlertWithCallback('Estas seguro?',
      'Esto cerrara tu sesión en la aplicación.').then((yes) => {
        if (yes) {
          this.toastCtrl.create('Desconectado de la aplicación');
        }
      });
  }
}
