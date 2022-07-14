"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sueldo, antiguedad, equipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.antiguedad = antiguedad;
        this.equipo = equipo;
    }
    Persona.prototype.Hablar = function () {
        console.log('Hola, soy ' + this.nombre);
    };
    Persona.prototype.Concentrarse = function () {
        console.log(this.nombre + ' se concentra');
    };
    return Persona;
}());
exports.Persona = Persona;
