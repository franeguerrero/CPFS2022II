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
exports.Camioneta = void 0;
var vehiculo_1 = require("./vehiculo");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo, color) {
        var _this = _super.call(this, marca, modelo, color) || this;
        _this.cuatroXcuatro = false;
        return _this;
    }
    Camioneta.prototype.acelerar = function (n) {
        if (this.prendido && this.velocidad + (n || 1) <= 150) {
            if (n) {
                this.velocidad += n;
            }
            else {
                this.velocidad++;
            }
            console.log("Velocidad actual: ".concat(this.velocidad));
        }
        else {
            console.log('No te dá la nave, maquinola');
        }
    };
    Camioneta.prototype.toogleCuatroXcuatro = function () {
        console.log('La camioneta esta ' + (this.cuatroXcuatro ? 'en 4x4' : 'en 4x2'));
    };
    return Camioneta;
}(vehiculo_1.Vehiculo));
exports.Camioneta = Camioneta;
