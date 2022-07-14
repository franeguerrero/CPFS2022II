import { Telefono } from './telefono';

export class TelefonoConCamara extends Telefono {
    constructor(estaPrendido: boolean, bateriaActual: number) {
        super(estaPrendido, bateriaActual);
    }
    public mandarMensaje(mensaje: string): void {
        console.log(mensaje);
    }
    public hacerLlamada(numero: number): void {
        console.log(`Llamando a ${numero}`);
    }
    public prenderApagar(): void {
        super.prenderApagar();
    }
    public cargarBateria(carga: number): void {
        super.cargarBateria(carga);
    }
    public sacarFoto(): void {
        console.log('Sacando foto');
    }
}