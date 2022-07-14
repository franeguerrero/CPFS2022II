"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var persona_1 = require("./persona");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, edad, sueldo, antiguedad, equipo, jugadores) {
        var _this = _super.call(this, nombre, edad, sueldo, antiguedad, equipo) || this;
        _this.jugadores = [];
        _this.jugadores = jugadores;
        return _this;
    }
    Entrenador.prototype.Entrenar = function () {
        console.log(this.nombre + ' entrena a ' + this.equipo);
    };
    Entrenador.prototype.Dirigir = function () {
        console.log(this.nombre + ' dirige a ' + this.equipo);
    };
    Entrenador.prototype.Planificar = function () {
        console.log(this.nombre + ' planifica jugadas');
    };
    Entrenador.prototype.DefinirTitulares = function (dorsal) {
        for (var _i = 0, _a = this.jugadores; _i < _a.length; _i++) {
            var jugador = _a[_i];
            if (jugador.getDorsal() === dorsal) {
                jugador.setTitular(true);
                console.log(jugador.getNombre() + ' ahora es titular');
            }
        }
    };
    return Entrenador;
}(persona_1.Persona));
exports.Entrenador = Entrenador;
