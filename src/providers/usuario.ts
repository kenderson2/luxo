export class Usuario {
    constructor(
       public fecha_nacimiento: Date,
       public sexo: string,
       public direccion: string,
       public telefono: string,
       public id_ciudad: number,
     //  public img: string,
    ) { }
 }