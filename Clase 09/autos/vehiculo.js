"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, color) {
        this.prendido = false;
        this.velocidad = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    Vehiculo.prototype.tooglePrendido = function () {
        this.prendido = !this.prendido;
        console.log('El vehiculo esta ' + (this.prendido ? 'prendido' : 'apagado'));
    };
    Vehiculo.prototype.frenar = function (n) {
        if (this.velocidad >= 0 && this.velocidad >= (n || 1)) {
            if (n) {
                this.velocidad -= n;
            }
            else {
                this.velocidad--;
            }
        }
    };
    Vehiculo.prototype.frenarEnSeco = function () {
        this.velocidad = 0;
    };
    Vehiculo.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
