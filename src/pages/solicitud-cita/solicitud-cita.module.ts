import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitudCitaPage } from './solicitud-cita';

@NgModule({
  declarations: [
    SolicitudCitaPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitudCitaPage),
  ],
})
export class SolicitudCitaPageModule {}
