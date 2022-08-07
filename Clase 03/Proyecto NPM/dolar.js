"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
(0, axios_1["default"])({
    method: "GET",
    url: "https://api-dolar-argentina.herokuapp.com/api/all"
}).then(function (r) { return console.log("Oficial compra: ".concat(r.data.valores.Dolar.casa344.compra._text, " \n Oficial venta: ").concat(r.data.valores.Dolar.casa344.venta._text, "\n Blue compra: ").concat(r.data.valores.Dolar.casa380.compra._text, " \n Blue venta: ").concat(r.data.valores.Dolar.casa380.venta._text)); });
