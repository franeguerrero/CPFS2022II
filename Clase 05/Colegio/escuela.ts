import { Alumno } from "./alumno";
import { Profesor } from "./profesor";

export class Escuela {
    private profesores: Profesor[];
    private alumnos: Alumno[];
    constructor(profesores: Profesor[], alumnos: Alumno[]) {
        this.profesores = profesores;
        this.alumnos = alumnos;
    }
    
    public contratarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    public despedirProfesor(profesor:string): void {
        this.profesores = this.profesores.filter(profesorActual => profesorActual.getNombre() !== profesor);
    }
    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
    public expulsarAlumno(alumno: string): void {
        this.alumnos = this.alumnos.filter(alumnoActual => alumnoActual.getNombre() !== alumno);
    }
    public listaAlumnos(): void {
        console.log(`Alumnos de la escuela: ${this.alumnos.map(alumno => alumno.getNombre()).join(', ')}`);
    }
    public listaProfesores(): void {
        console.log(`Profesores de la escuela: ${this.profesores.map(profesor => profesor.getNombre()).join(', ')}`);
    }
}
