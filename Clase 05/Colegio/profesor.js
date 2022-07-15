"use strict";
exports.__esModule = true;
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre, alumnos) {
        this.nombre = nombre;
        this.alumnos = alumnos;
    }
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.listaAlumnos = function (alumnos) {
        console.log("Profesor/a ".concat(this.nombre, " est\u00E1 a cargo de los alumnos: ").concat(alumnos.map(function (alumno) { return alumno.getNombre(); }).join(', ')));
    };
    return Profesor;
}());
exports.Profesor = Profesor;
