import { Alumno } from "./alumno";
import { Profesor } from "./profesor";
import { Escuela } from "./escuela";

let alumnos: Alumno[] = [
    new Alumno('Jaime', 8),
    new Alumno('Paula', 7),
    new Alumno('Martina', 6)
]

let profesores: Profesor[] = [
    new Profesor('Juan', alumnos),
    new Profesor('Pedro', alumnos),
    new Profesor('Maria', alumnos)
]

let escuela = new Escuela(profesores, alumnos);
alumnos.forEach(alumno => {
    alumno.getNota();
});
profesores.forEach(profesor => {
    profesor.listaAlumnos(alumnos);});
escuela.listaAlumnos();
escuela.listaProfesores();
escuela.contratarProfesor(new Profesor('Luis', alumnos));
escuela.listaProfesores();
escuela.despedirProfesor('Juan');
escuela.listaProfesores();
escuela.matricularAlumno(new Alumno('Felipe', 3));
escuela.listaAlumnos();
escuela.expulsarAlumno('Paula');
escuela.listaAlumnos();

