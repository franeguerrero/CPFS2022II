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
exports.Masajista = void 0;
var persona_1 = require("./persona");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, edad, sueldo, antiguedad, equipo, clientes) {
        var _this = _super.call(this, nombre, edad, sueldo, antiguedad, equipo) || this;
        _this.clientes = [];
        _this.clientes = clientes;
        return _this;
    }
    Masajista.prototype.Rehabilitar = function (dorsal) {
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            if (cliente.getDorsal() === dorsal) {
                console.log(this.nombre + ' rehabilita a ' + cliente.getNombre());
            }
        }
    };
    Masajista.prototype.Masajear = function (dorsal) {
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            if (cliente.getDorsal() === dorsal) {
                console.log(this.nombre + ' masajea a ' + cliente.getNombre());
            }
        }
    };
    return Masajista;
}(persona_1.Persona));
exports.Masajista = Masajista;
