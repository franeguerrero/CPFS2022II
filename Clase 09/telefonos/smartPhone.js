"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone(numero) {
        this.estaPrendido = false;
        this.numero = numero;
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        if (this.estaPrendido && numero !== this.numero) {
            console.log("Llamando al numero ".concat(numero));
        }
    };
    SmartPhone.prototype.sacarFoto = function () {
        if (this.estaPrendido) {
            console.log("Sacando foto");
        }
    };
    return SmartPhone;
}());
