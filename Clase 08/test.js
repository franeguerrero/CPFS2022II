"use strict";
exports.__esModule = true;
var entrenador_1 = require("./entrenador");
var futbolista_1 = require("./futbolista");
var masajista_1 = require("./masajista");
var scaloneta = new entrenador_1.Entrenador('Scaloneta', 30, 1000000, 1, 'Estudiantes', [
    new futbolista_1.Futbolista('Juan', 23, 1000, 1, 'Estudiantes', 'Delantero', 1, 0, 'Derecho'),
    new futbolista_1.Futbolista('Pedro', 25, 1000, 1, 'Estudiantes', 'Delantero', 2, 0, 'Derecho'),
    new futbolista_1.Futbolista('Mionel Lessi', 23, 1000, 1, 'Estudiantes', 'Delantero', 3, 500, 'Zurdo'),
    new futbolista_1.Futbolista('Meynar', 25, 1000, 1, 'Estudiantes', 'Delantero', 4, 0, 'Derecho'),
    new futbolista_1.Futbolista('Francisco', 24, 1000000, 1, 'Estudiantes', 'Delantero', 5, 0, 'Derecho'),
    new futbolista_1.Futbolista('Máximo Virgolini', 25, 1000, 1, 'Estudiantes', 'Delantero', 6, 0, 'Derecho'),
]);
var manotas = new masajista_1.Masajista('Manotas', 30, 10000, 1, 'Estudiantes', [
    new futbolista_1.Futbolista('Juan', 23, 1000, 1, 'Estudiantes', 'Delantero', 1, 0, 'Derecho'),
    new futbolista_1.Futbolista('Pedro', 25, 1000, 1, 'Estudiantes', 'Delantero', 2, 0, 'Derecho'),
    new futbolista_1.Futbolista('Mionel Lessi', 23, 1000, 1, 'Estudiantes', 'Delantero', 3, 500, 'Zurdo'),
    new futbolista_1.Futbolista('Meynar', 25, 1000, 1, 'Estudiantes', 'Delantero', 4, 0, 'Derecho'),
    new futbolista_1.Futbolista('Francisco', 24, 1000000, 1, 'Estudiantes', 'Delantero', 5, 0, 'Derecho'),
    new futbolista_1.Futbolista('Máximo Virgolini', 25, 1000, 1, 'Estudiantes', 'Delantero', 6, 0, 'Derecho'),
]);
console.log('---------Entrenador----------');
scaloneta.Entrenar();
scaloneta.Dirigir();
scaloneta.Planificar();
scaloneta.DefinirTitulares(6);
scaloneta.DefinirTitulares(4);
scaloneta.DefinirTitulares(3);
console.log('\n\n---------Masajista----------');
manotas.Masajear(6);
manotas.Rehabilitar(4);
