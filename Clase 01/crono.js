let readlineSync = require('readline-sync');

// let vuelta1 = +readlineSync.question('Tiempo de la vuelta 1: ');
// let vuelta2 = +readlineSync.question('Tiempo de la vuelta 2: ');
// let vuelta3 = +readlineSync.question('Tiempo de la vuelta 3: ');
// let vuelta4 = +readlineSync.question('Tiempo de la vuelta 4: ');

// let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
// let promedio = tiempoTotal / 4;

// console.log('El tiempo total es: ' + tiempoTotal);
// console.log('El promedio es: ' + promedio);

let tiempoTotal = 0;

for (let i = 1; i <= 4; i++) {
    let vuelta = +readlineSync.question('Tiempo de la vuelta ' + i + ': ');
    tiempoTotal += vuelta;
}
let promedio = tiempoTotal / 4;
console.log('El tiempo total es: ' + tiempoTotal);
console.log('El promedio es: ' + promedio);
