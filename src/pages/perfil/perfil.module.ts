import { PerfilPage } from './perfil';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilPage),
  ],
  exports: [
    PerfilPage
  ]
})

export class PerfilPageModule { }
