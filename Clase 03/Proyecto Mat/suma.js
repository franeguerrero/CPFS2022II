"use strict";
exports.__esModule = true;
exports.suma = void 0;
function suma(arr) {
    var sumado = 0;
    arr.forEach(function (element) {
        sumado += Number(element);
    });
    return sumado;
}
exports.suma = suma;
