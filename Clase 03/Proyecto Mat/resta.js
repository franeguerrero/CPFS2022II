"use strict";
exports.__esModule = true;
exports.resta = void 0;
function resta(arr) {
    var resta = Number(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        resta -= Number(arr[i]);
    }
    return resta;
}
exports.resta = resta;
