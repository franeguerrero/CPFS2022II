"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var profesor_1 = require("./profesor");
var escuela_1 = require("./escuela");
var alumnos = [
    new alumno_1.Alumno('Jaime', 8),
    new alumno_1.Alumno('Paula', 7),
    new alumno_1.Alumno('Martina', 6)
];
var profesores = [
    new profesor_1.Profesor('Juan', alumnos),
    new profesor_1.Profesor('Pedro', alumnos),
    new profesor_1.Profesor('Maria', alumnos)
];
var escuela = new escuela_1.Escuela(profesores, alumnos);
alumnos.forEach(function (alumno) {
    alumno.getNota();
});
profesores.forEach(function (profesor) {
    profesor.listaAlumnos(alumnos);
});
escuela.listaAlumnos();
escuela.listaProfesores();
escuela.contratarProfesor(new profesor_1.Profesor('Luis', alumnos));
escuela.listaProfesores();
escuela.despedirProfesor('Juan');
escuela.listaProfesores();
escuela.matricularAlumno(new alumno_1.Alumno('Felipe', 3));
escuela.listaAlumnos();
escuela.expulsarAlumno('Paula');
escuela.listaAlumnos();
