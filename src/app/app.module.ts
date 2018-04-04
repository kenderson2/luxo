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
import { SolicitudCitaPage } from '../pages/solicitud-cita/solicitud-cita';
import { PromocionesPage } from '../pages/promociones/promociones';
import { MotivosRechazoCitaPage }from '../pages/motivos-rechazo-cita/motivos-rechazo-cita';
import { EditDatosPage } from '../pages/edit-datos/edit-datos';
import { ViewServicioPage } from '../pages/view-servicio/view-servicio';
import { MotivoGarantiaPage }from '../pages/motivo-garantia/motivo-garantia';

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
    SolicitudCitaPage,
    PromocionesPage,
    MotivosRechazoCitaPage,
    EditDatosPage,
    ViewServicioPage,
    MotivoGarantiaPage
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
    SolicitudCitaPage,
    PromocionesPage,
    MotivosRechazoCitaPage,
    EditDatosPage,
    ViewServicioPage,
    MotivoGarantiaPage
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
