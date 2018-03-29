import { SharedModule } from './shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ToastService } from '../providers/toast.service';
import { AlertService } from '../providers/alert.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginBackgroundSliderPage } from '../pages/login-background-slider/login-background-slider';
import { PerfilPage } from '../pages/perfil/perfil';
import { AboutPage } from '../pages/about/about';
import { ServiciosRecibidosPage } from'../pages/servicios-recibidos/servicios-recibidos';
import { ProfileSettingsPage } from '../pages/profile-settings/profile-settings';
import { PreferenciasPage } from '../pages/preferencias/preferencias';
import { SolicitudPage } from '../pages/solicitud/solicitud';
import { PromocionesPage } from '../pages/promociones/promociones';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginBackgroundSliderPage,
    PerfilPage,
    AboutPage,
    ServiciosRecibidosPage,
    ProfileSettingsPage,
    PreferenciasPage,
    SolicitudPage,
    PromocionesPage,
    NotificacionesPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginBackgroundSliderPage,
    PerfilPage,
    AboutPage,
    ServiciosRecibidosPage,
    ProfileSettingsPage,
    PreferenciasPage,
    SolicitudPage,
    PromocionesPage,
    NotificacionesPage,
    
  ],
  providers: [
    StatusBar,
    ToastService,
    SplashScreen,
    AlertService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
