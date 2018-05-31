export class MotivoCancelacion {
    constructor(
       public id_tipo_motivo_cancelacion: number,
       public descripcion: string,
       public servicio: any,
       public presupuesto: number,
       //public id_solicitud: number,
    ) { }
 }