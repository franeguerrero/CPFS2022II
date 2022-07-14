import { AutoCiudad } from './autoCiudad';
import { AutoDeportivo } from './autoDeportivo';
import { Camioneta } from './camioneta';

let fitito = new AutoCiudad('Fiat', '500', 'Rojo');
fitito.tooglePrendido();
fitito.tooglePrendido();
fitito.tooglePrendido();
fitito.acelerar(170);
fitito.acelerar(140);
fitito.frenar(15);
console.log(fitito.getVelocidad());
fitito.frenarEnSeco()
console.log(fitito.getVelocidad());
console.log(fitito.getColor());
console.log(fitito.getMarca());
console.log(fitito.getModelo());
console.log('----------------------------------');
let nave = new AutoDeportivo('Ford', 'Mustang', 'Negro');
nave.tooglePrendido();
nave.tooglePrendido();
nave.tooglePrendido();
nave.acelerar(170);
nave.frenar(15);
console.log(nave.getVelocidad());
nave.frenarEnSeco()
console.log(nave.getVelocidad());
console.log(nave.getColor());
console.log(nave.getMarca());
console.log(nave.getModelo());
console.log('----------------------------------');
let chata = new Camioneta('Toyota', 'Hilux', 'Blanco');
chata.tooglePrendido();
chata.tooglePrendido();
chata.tooglePrendido();
chata.acelerar(170);
chata.acelerar(140);
chata.frenar(15);
console.log(chata.getVelocidad());
chata.frenarEnSeco()
console.log(chata.getVelocidad());
console.log(chata.getColor());
console.log(chata.getMarca());
console.log(chata.getModelo());
