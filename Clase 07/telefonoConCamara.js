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
exports.TelefonoConCamara = void 0;
var telefono_1 = require("./telefono");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(estaPrendido, bateriaActual) {
        return _super.call(this, estaPrendido, bateriaActual) || this;
    }
    TelefonoConCamara.prototype.mandarMensaje = function (mensaje) {
        console.log(mensaje);
    };
    TelefonoConCamara.prototype.hacerLlamada = function (numero) {
        console.log("Llamando a ".concat(numero));
    };
    TelefonoConCamara.prototype.prenderApagar = function () {
        _super.prototype.prenderApagar.call(this);
    };
    TelefonoConCamara.prototype.cargarBateria = function (carga) {
        _super.prototype.cargarBateria.call(this, carga);
    };
    TelefonoConCamara.prototype.sacarFoto = function () {
        console.log('Sacando foto');
    };
    return TelefonoConCamara;
}(telefono_1.Telefono));
exports.TelefonoConCamara = TelefonoConCamara;
