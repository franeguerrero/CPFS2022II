import { Telefono } from './telefono';
import { TelefonoConCamara } from './telefonoConCamara';
import { TelefonoConRadio } from './telefonoConRadio';

let telefono = new Telefono(true, 50);
let tcc = new TelefonoConCamara(true, 60);
let tcr = new TelefonoConRadio(true, 90, 95.4);

console.log('-------------- Telefono --------------');
telefono.mandarMensaje('Hola');
telefono.hacerLlamada(123456789);
telefono.prenderApagar();
telefono.cargarBateria(20);
console.log('\n');
console.log('-------------- Telefono Con Camara --------------');
tcc.mandarMensaje('Hola');
tcc.hacerLlamada(123456789);
tcc.prenderApagar();
tcc.cargarBateria(20);
tcc.sacarFoto();
console.log('\n');
console.log('-------------- Telefono Con Radio --------------');
tcr.mandarMensaje('Hola');
tcr.hacerLlamada(123456789);
tcr.prenderApagar();
tcr.cargarBateria(20);
tcr.verFrecuenciaActual();