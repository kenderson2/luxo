import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
    });
  }
  user: string;
  pass: any;
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
    let f = {user: this.user, pass: this.pass};
    
        //Metodo cutre para entrar a la app
        if (this.user=="Nury" && this.pass=="1234"){
            this.navCtrl.setRoot(HomePage)
        } 
        else {
        this.user="";
        this.pass="";
            let alert = this.alertCtrl.create({
            title: 'Usuario no registrado',
            subTitle: 'Si no te has registrado vamos hazlo ya que esperas es gratis...',
            buttons: ['OK']
            });
            alert.present();
         }
        }

}
