"use strict";
exports.__esModule = true;
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(profesores, alumnos) {
        this.profesores = profesores;
        this.alumnos = alumnos;
    }
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.despedirProfesor = function (profesor) {
        this.profesores = this.profesores.filter(function (profesorActual) { return profesorActual.getNombre() !== profesor; });
    };
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        this.alumnos = this.alumnos.filter(function (alumnoActual) { return alumnoActual.getNombre() !== alumno; });
    };
    Escuela.prototype.listaAlumnos = function () {
        console.log("Alumnos de la escuela: ".concat(this.alumnos.map(function (alumno) { return alumno.getNombre(); }).join(', ')));
    };
    Escuela.prototype.listaProfesores = function () {
        console.log("Profesores de la escuela: ".concat(this.profesores.map(function (profesor) { return profesor.getNombre(); }).join(', ')));
    };
    return Escuela;
}());
exports.Escuela = Escuela;
