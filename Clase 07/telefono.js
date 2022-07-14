"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendido, bateriaActual) {
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }
    Telefono.prototype.mandarMensaje = function (mensaje) {
        console.log(mensaje);
    };
    Telefono.prototype.hacerLlamada = function (numero) {
        console.log("Llamando a ".concat(numero));
    };
    Telefono.prototype.prenderApagar = function () {
        this.estaPrendido = !this.estaPrendido;
        if (this.estaPrendido) {
            console.log('El telefono se ha prendido');
        }
        else {
            console.log('El telefono se ha apagado');
        }
    };
    Telefono.prototype.cargarBateria = function (carga) {
        this.bateriaActual += carga;
        if (this.bateriaActual >= 100) {
            this.bateriaActual = 100;
            console.log('La bateria esta llena');
        }
        else {
            console.log("La bateria se ha cargado ".concat(carga, "%, ahora tienes ").concat(this.bateriaActual, "%"));
        }
    };
    return Telefono;
}());
exports.Telefono = Telefono;
