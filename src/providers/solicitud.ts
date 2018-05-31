export class Solicitud {
    constructor(
       public presupuesto: number,
       public servicio:any[],
       public horario_empleado: number,
       public fecha: Date,
       public hora_inicio: any,
       public hora_fin: any,
    ) { }
 }