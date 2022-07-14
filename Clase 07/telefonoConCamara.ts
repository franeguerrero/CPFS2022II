import { Telefono } from './telefono';

export class TelefonoConCamara extends Telefono {
    constructor(estaPrendido: boolean, bateriaActual: number) {
        super(estaPrendido, bateriaActual);
    }
    public sacarFoto(): void {
        console.log('Sacando foto');
    }
}