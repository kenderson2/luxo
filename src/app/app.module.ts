import { SharedModule } from './shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ToastService } from '../providers/toast.service';
import { AlertService } from '../providers/alert.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePickerModule } from 'ionic3-datepicker';

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
import { EditPreferenciasPage } from '../pages/edit-preferencias/edit-preferencias';
import {OpinionPage } from '../pages/opinion/opinion';
import { CatalogoPage } from '../pages/catalogo/catalogo';
import { CatalogomanicurePage } from '../pages/catalogomanicure/catalogomanicure';
import { CatalogopedicurePage } from '../pages/catalogopedicure/catalogopedicure';
import { CatalogosistemaPage } from '../pages/catalogosistema/catalogosistema';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { MicalendarioPage } from '../pages/micalendario/micalendario';
import { RechazoservicioPage } from '../pages/rechazoservicio/rechazoservicio';

import { AuthService } from '../services/auth.service';
import { UserService } from '../providers/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GhotsProvider } from '../providers/ghots/ghots';

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
    MotivoGarantiaPage,
    NotificacionesPage,
    EditPreferenciasPage,
    CatalogoPage,
    CatalogomanicurePage,
    CatalogopedicurePage,
    CatalogosistemaPage,
    OpinionPage,
    MicalendarioPage,   
    RechazoservicioPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
    DatePickerModule,
    ComponentsModule,
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
    MotivoGarantiaPage,
    NotificacionesPage,
    EditPreferenciasPage,
    CatalogoPage,
    CatalogomanicurePage,
    CatalogopedicurePage,
    CatalogosistemaPage,
    OpinionPage, 
    MicalendarioPage,
    RechazoservicioPage,  
  ],
  providers: [
    StatusBar,
    ToastService,
    SplashScreen,
    AlertService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    GhotsProvider
  ]
})
export class AppModule {}
