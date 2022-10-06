"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.id = id;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.getID = function () {
        return this.id;
    };
    Auto.prototype.setID = function (id) {
        this.id = id;
    };
    return Auto;
}());
exports["default"] = Auto;
