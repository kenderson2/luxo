export class SPrestado {
    constructor(
       public id: number,
       public id_servicio:number,
      public  id_solicitud:number,
      public id_detalle_servicio:number,
      public descripcion: string,
      public nombre:string,  
      public servicio:string,
    public precio:number,
      public fecha_prestacion:Date,
      public calificacion:number,
      public manicurista:string,
    
        
    ) { }
 }