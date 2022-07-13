let readlineSync = require('readline-sync');
let altura = readlineSync.question('Indique la altura: ');
let base = readlineSync.question('Indique la base: ');
let baseXAltura = base * altura;
console.log(
    'Altura: ' +
        altura +
        ' y base: ' +
        base +
        ' da como resultado: ' +
        baseXAltura
);
