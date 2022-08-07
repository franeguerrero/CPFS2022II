"use strict";
exports.__esModule = true;
var resta_1 = require("./resta");
var suma_1 = require("./suma");
var fs = require("fs");
var txt = fs.readFileSync("./numeros.txt", "utf8");
var numeros = txt.split(",");
console.log((0, suma_1.suma)(numeros));
console.log((0, resta_1.resta)(numeros));
