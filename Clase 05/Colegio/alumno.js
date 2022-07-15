"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
        this.aprobado = this.nota >= 7 ? 'aprobado/a' : 'desaprobado/a';
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getNota = function () {
        console.log("".concat(this.nombre, " est\u00E1 ").concat(this.aprobado, " con ").concat(this.nota));
    };
    return Alumno;
}());
exports.Alumno = Alumno;
