export class DetalleServicio {
    constructor(
       public id: number,
       public precio: number,
       public nombre: string,
       public img: string,      
       public  id_tipo_parametro: number,	
    ) { }
 }