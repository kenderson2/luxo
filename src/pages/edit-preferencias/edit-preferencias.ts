import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the EditPreferenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-preferencias',
  templateUrl: 'edit-preferencias.html',
})
export class EditPreferenciasPage {
  colores:any;
  esmaltes:any = [{
    "id": 1,
    "nombre": "Mate",
    "colores": [{
       "id": 1,
       "nombre": "Azul"
    } , {
       "id": 2,
       "nombre": "Rojo"
    }, {
      "id": 3,
      "nombre": "Turquesa"
    }]
  } , {
    "id": 1,
    "nombre": "Metalicas",
    "colores": [{
       "id": 1,
       "nombre": "Bronce"
    } , {
       "id": 2,
       "nombre": "Rosa Gold"
    }, {
      "id": 3,
      "nombre": "Dorado"
    }, {
      "id": 4,
      "nombre": "Morado"
    }]
  } , {
    "id": 1,
    "nombre": "Crema",
    "colores": [{
       "id": 1,
       "nombre": "Beige"
    } , {
       "id": 2,
       "nombre": "Rosa Vintage"
    }, {
      "id":3,
      "nombre": "Azul cielo"
    }]
  },{
    "id": 1,
    "nombre": "Perlado",
    "colores": [{
       "id": 1,
       "nombre": "Beige"
    } , {
       "id": 2,
       "nombre": "Blanco perla"
    }, {
      "id":3,
      "nombre": "Coral"
    }]
  }, {
    "id": 1,
    "nombre": "Neon",
    "colores": [{
       "id": 1,
       "nombre": "Verde"
    } , {
       "id": 2,
       "nombre": "Naranja"
    }, {
      "id":3,
      "nombre": "Fucsia"
    }]
  }, {
    "id": 1,
    "nombre": "Brillo color",
    "colores": [{
       "id": 1,
       "nombre": "Beige"
    } , {
       "id": 2,
       "nombre": "Rosado"
    }, {
      "id":3,
      "nombre": "Gris"
    }]
  }, {
    "id": 1,
    "nombre": "Escarchado",
    "colores": [{
       "id": 1,
       "nombre": "Azul"
    } , {
       "id": 2,
       "nombre": "Morado"
    }, {
      "id":3,
      "nombre": "Dorado"
    }]
  }, {
    "id": 1,
    "nombre": "Craquelado",
    "colores": [{
       "id": 1,
       "nombre": "Blanco"
    } , {
       "id": 2,
       "nombre": "Verde manzana"
    }, {
      "id":3,
      "nombre": "Azul"
    }]
  }]

  servicio:any;
  servicios = ['Manicure', 'Pedicure', 'Sistema de uñas'];
 
  decoracion:any;
  decoraciones = [
    'Francesita', 'Floral', 'Lineas', 'Circulos', 'Animal Print', 'Coloridas'
  ]

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
  }

  itemView(colores){
    console.log('Seleccionado:');
    console.log(colores);
    this.colores = colores;
  }

  guardar(){
    let alert = this.alertCtrl.create({
      title:    'Éxito!',
      subTitle: 'Sus preferencias han sido guardadas satisfactoriamente!',
      buttons:  ['OK']
    });
    alert.present();
  }

}
