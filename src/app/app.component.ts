import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { LoginBackgroundSliderPage } from '../pages/login-background-slider/login-background-slider';
import { PerfilPage } from '../pages/perfil/perfil';
import { PromocionesPage } from '../pages/promociones/promociones';
import { SolicitudCitaPage } from '../pages/solicitud-cita/solicitud-cita';
import { CatalogoPage } from '../pages/catalogo/catalogo';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { OpinionPage } from '../pages/opinion/opinion';
import { MicalendarioPage } from '../pages/micalendario/micalendario';
import { AuthService } from '../services/auth.service';
import { AboutPage } from '../pages/about/about';
import { UserService } from '../providers/user.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  loggedIn: boolean;
  rootPage: any = HomePage;
  myIcon: string = "home";
  usuario=[];
  user :any;

  

  pages: Array<{title: string,icono:string, component: any}>;
  pages1: any;
  pages2: any;

  constructor(public platform: Platform, public statusBar: StatusBar,
     public splashScreen: SplashScreen,public auth: AuthService,
     public userauth: UserService, public menuCtrl: MenuController) {
    this.initializeApp();
   

    if(this.loggedIn){
     
     this.pages = [
      { title: 'Inicio', icono:'home', component: HomePage  },      
     { title: 'Perfíl', icono:'camera', component: PerfilPage},            
      { title: 'Servicios', icono:'ios-basket', component: CatalogoPage},
      { title: 'Promociones', icono:'basket', component: PromocionesPage },
     { title: 'Solicitar Cita', icono:'paper', component: SolicitudCitaPage},
      { title: 'Contacto', icono:'chatbubbles', component: OpinionPage},
      { title: 'Sobre Nosotros', icono:'heart',component: AboutPage},
   // { title: 'Cerrar sesión', icono: 'logOut', component: LogoutPage }
    ];
    }


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', icono:'home', component: HomePage  },      
     { title: 'Perfíl', icono:'camera', component: PerfilPage},            
      { title: 'Servicios', icono:'ios-basket', component: CatalogoPage},
      { title: 'Promociones', icono:'basket', component: PromocionesPage },
   //  { title: 'Solicitar Cita', icono:'paper', component: SolicitudCitaPage},
      { title: 'Contacto', icono:'chatbubbles', component: OpinionPage},
      { title: 'Sobre Nosotros', icono:'heart',component: AboutPage},
   // { title: 'Cerrar sesión', icono: 'logOut', component: LogoutPage }.

    ];

   
   // this.icons = ['flask', 'wifi', 'beer', 'football'];

  }
  ionViewDidLoad() {
    this.sesion();
    this.vistaInicial();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sesion() {
    this.loggedIn=this.auth.checkSession();
    console.log("algo seria");
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  vistaInicial(){
    if(this.auth.checkSession){
      this.userauth.getUsuario()
      .subscribe(
        (data) => { // Success
          this.user=JSON.parse(data.text());
          this.usuario = this.user['data'];               
        },
        (error) =>{
          console.error(error);
        }
      )
  }
  }
}
