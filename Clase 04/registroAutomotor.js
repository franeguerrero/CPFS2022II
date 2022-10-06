"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(ListaVehiculos) {
        if (ListaVehiculos === void 0) { ListaVehiculos = []; }
        this.Vehiculos = [];
        this.DeAlta = [];
        this.Vehiculos = ListaVehiculos;
    }
    RegistroAutomotor.prototype.getListaVehiculos = function () {
        return this.Vehiculos;
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.Vehiculos.push(vehiculo);
        console.log("Vehiculo Agregado");
        return this.Vehiculos;
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (id) {
        var vehiculo = this.Vehiculos.find(function (Auto) { return Auto.getID() == id; });
        if (vehiculo) {
            this.Vehiculos.splice(this.Vehiculos.indexOf(vehiculo), 1);
            console.log("Vehiculo Eliminado");
            return this.Vehiculos;
        }
        else {
            console.log("No se encontro el vehiculo");
        }
    };
    RegistroAutomotor.prototype.actualizarVehiculo = function (id, newmarca, newmodelo, newid) {
        var vehiculo = this.Vehiculos.find(function (Auto) { return Auto.getID() == id; });
        if (vehiculo) {
            vehiculo.setMarca(newmarca);
            vehiculo.setModelo(newmodelo);
            vehiculo.setID(newid);
            console.log("Vehiculo Actualizado");
            return this.Vehiculos;
        }
        else {
            console.log("No se encontro el vehiculo");
        }
    };
    RegistroAutomotor.prototype.darDeAlta = function (id) {
        var vehiculo = this.Vehiculos.find(function (Auto) { return Auto.getID() == id; });
        if (vehiculo) {
            this.DeAlta.push(vehiculo);
            this.Vehiculos.splice(this.Vehiculos.indexOf(vehiculo), 1);
            console.log("Vehiculo dado de alta");
            return this.DeAlta;
        }
        else {
            console.log("No se encontro el vehiculo");
        }
    };
    return RegistroAutomotor;
}());
var porsche = new auto_1["default"]("Porsche", "911", 1234);
var audi = new auto_1["default"]("Audi", "A3", 2345);
var ford = new auto_1["default"]("Ford", "Mustang", 3456);
var bmw = new auto_1["default"]("BMW", "Serie 3", 4567);
var ListaVehiculos = [audi, ford];
var registroAuto = new RegistroAutomotor(ListaVehiculos);
registroAuto.agregarVehiculo(porsche);
registroAuto.agregarVehiculo(bmw);
