import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDatosPage } from './edit-datos';

@NgModule({
  declarations: [
    EditDatosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDatosPage),
  ],
})
export class EditDatosPageModule {}
