"use strict";
exports.__esModule = true;
var fs = require("fs");
var votantes = fs.readFileSync('votantes.txt', 'utf8');
var escuelas = fs.readFileSync('escuelas.txt', 'utf8');
var arregloVotantes = votantes.split(',');
var arregloEscuelas = escuelas.split(',');
function buscarDondeVoto(votante) {
    if (arregloVotantes.find(function (persona) { return persona === votante; })) {
        if (votante.startsWith("F")) {
            return arregloEscuelas[0];
        }
        else if (votante.startsWith("A")) {
            return arregloEscuelas[1];
        }
        else if (votante.startsWith("Ñ")) {
            return arregloEscuelas[2];
        }
    }
    else {
        return "No puedes votar";
    }
}
console.log(arregloEscuelas);
console.log(arregloVotantes);
console.log(buscarDondeVoto("Filadelfio"));
