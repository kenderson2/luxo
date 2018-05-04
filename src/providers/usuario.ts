export class Usuario {
    constructor(
       public id: number,
       public nombre: string,
       public apellido: string,
       public img: string,
       public sexo: string,
       public direccion: string,
       public telefono: string,
       public descripcion: string,
       public estado_nombre: string    
    ) { }
 }