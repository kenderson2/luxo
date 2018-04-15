import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login-background-slider',
  templateUrl: 'login-background-slider.html'
})
export class LoginBackgroundSliderPage {

  backgrounds = [
    'assets/imgs/imagen1.jpg',
    'assets/imgs/imagen2.jpg',
    'assets/imgs/imagen3.jpg',
    'assets/imgs/imagen4.jpg'
  ];
  public loginForm: any;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private auth:AuthService) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(2),
        Validators.required])]
    });
  }
  correo: string;
  contrasenna: any;
  isLogged: boolean;

  ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {
    if (!this.loginForm.valid) {
      console.log('Invalid or empty data');
    } else {
      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      console.log('user data', userEmail, userPassword);
    }
  }
  Signup(){
  //metodo pulido y arrecho de ingresas a la aplicacion ** Soy es yo en 4D jaja
     let f = {correo: this.loginForm.value.email, contrasenna: this.loginForm.value.password};
     console.log(f);       
       this.auth.login(f)
      .subscribe(
        rs => this.isLogged = rs,
        er => console.log(er),
        () => {
          if (this.isLogged){
            this.navCtrl.setRoot(HomePage)
            .then(data => console.log(data),
            error => console.log(error));
          } else {
            let alert = this.alertCtrl.create({
            title: 'Usuario no registrado',
            subTitle: 'Si no te has registrado vamos hazlo ya que esperas es gratis...',
            buttons: ['OK']
            });
            alert.present();
          }
        }
      )
  }

}
