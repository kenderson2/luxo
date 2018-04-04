import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import {SolicitudCitaPage } from '../solicitud-cita/solicitud-cita';
=======
import {SolicitudPage} from '../solicitud/solicitud';
>>>>>>> b6312e2ae6f86b33044cfa4f519cc7e7b7550cbe

@Component({
  selector: 'page-promociones',
  templateUrl: 'promociones.html'
})
export class PromocionesPage {
  searchQuery: string = '';
  items: any[];

iniciarLista(){
 this.items = [
    {
      name:'Primer Servicio',
      img:'assets/imgs/promo1.jpg',
      descripcion:'Obten un 15% en nuestros servicios, si es tu primera solicitud.',

    },
    {
      name:'Navidad',
      img:'assets/imgs/promonavidad.jpg',
      descripcion:'La Navidad te Sonrie! Obten un descuento de hasta un 20% con nuestros Servicios relacionados a la Navidad',

    },
    {
      name:'Mejor pelicula animada',
      img:'assets/imgs/coco.jpg',
      descripcion:'Obten un 20% de descuento en nuestro servicio de manicure con decoración de la película Coco, acompañanos a celebrar.',

    },
    {
      name:'Llegaron los carnavales',
      img:'assets/imgs/carnaval.jpg',
      descripcion:'En los carnavales no te quedes en tu casa , aprovecha nuestra oferta del 10 % en todos nuestros servicios',

    },
  ];
}
  getItems(ev: any) {
    // Reset items back to all of the items
    this.iniciarLista();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

<<<<<<< HEAD
  Solicitar(){
    this.navCtrl.push(SolicitudCitaPage);
  }
=======
  Solicitud(){
    this.navCtrl.push(SolicitudPage);
  }

>>>>>>> b6312e2ae6f86b33044cfa4f519cc7e7b7550cbe
  constructor(public navCtrl: NavController) {
    this.iniciarLista();
  }
  
}
