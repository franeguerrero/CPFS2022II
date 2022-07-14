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
exports.Futbolista = void 0;
var persona_1 = require("./persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, edad, sueldo, antiguedad, equipo, posicion, dorsal, goles, pieHabil) {
        var _this = _super.call(this, nombre, edad, sueldo, antiguedad, equipo) || this;
        _this.titular = false;
        _this.posicion = posicion;
        _this.dorsal = dorsal;
        _this.goles = goles;
        _this.pieHabil = pieHabil;
        return _this;
    }
    Futbolista.prototype.Entrenar = function () {
        console.log(this.nombre + ' entrena');
    };
    Futbolista.prototype.HacerGol = function () {
        this.goles++;
        console.log(this.nombre + ' hace un gol');
    };
    Futbolista.prototype.JugarPartido = function () {
        console.log(this.nombre + ' juega un partido');
    };
    Futbolista.prototype.Atajar = function (posicion) {
        if (posicion === 'arquero') {
            console.log(this.nombre + ' ataja');
        }
    };
    Futbolista.prototype.HacerFalta = function () {
        console.log(this.nombre + ' hace una falta');
    };
    Futbolista.prototype.getDorsal = function () {
        return this.dorsal;
    };
    Futbolista.prototype.getNombre = function () {
        return this.nombre;
    };
    Futbolista.prototype.getGoles = function () {
        return this.goles;
    };
    Futbolista.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    return Futbolista;
}(persona_1.Persona));
exports.Futbolista = Futbolista;
