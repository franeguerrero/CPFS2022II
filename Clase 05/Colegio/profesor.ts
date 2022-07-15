import { Alumno } from "./alumno";

export class Profesor {
    private nombre:string;
    private alumnos:Alumno[];
    constructor(nombre:string, alumnos:Alumno[]){
        this.nombre = nombre;
        this.alumnos = alumnos
    }
    public getNombre():string{
        return this.nombre;
    }
    public listaAlumnos(alumnos:Alumno[]):void{
        console.log(`Profesor/a ${this.nombre} está a cargo de los alumnos: ${alumnos.map(alumno=>alumno.getNombre()).join(', ')}`);
        
    }
        
}
