import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginBackgroundSliderPage } from '../pages/login-background-slider/login-background-slider';
import { PerfilPage } from '../pages/perfil/perfil';
import { AboutPage } from '../pages/about/about';
import { PromocionesPage } from '../pages/promociones/promociones';
import { SolicitudPage } from '../pages/solicitud/solicitud';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  myIcon: string = "home";
  

  pages: Array<{title: string,icono:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icono:'home', component: HomePage  },
      { title: 'Promociones', icono:'basket', component: PromocionesPage },
      { title: 'Solicitar Cita', icono:'paper', component: SolicitudPage},
      { title: 'Perfil', icono:"camera", component: PerfilPage},
   //   { title: 'Notificaciones', icono:'notifications', component: },
      { title: 'Sobre Nosotros', icono:"heart", component: AboutPage},
      { title: 'Iniciar sesión', icono:'log-in',component:LoginBackgroundSliderPage },

    ];


   // this.icons = ['flask', 'wifi', 'beer', 'football'];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
