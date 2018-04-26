import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MicalendarioPage } from './micalendario';

@NgModule({
  declarations: [
    MicalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(MicalendarioPage),
  ],
})
export class MicalendarioPageModule {}
