import { Telefono } from './telefono';

export class TelefonoConRadio extends Telefono {
    private frecuenciaActual: number;
    constructor(
        estaPrendido: boolean,
        bateriaActual: number,
        frecuenciaActual: number
    ) {
        super(estaPrendido, bateriaActual);
        this.frecuenciaActual = frecuenciaActual;
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
    public verFrecuenciaActual(): void {
        console.log(`La frecuencia actual es ${this.frecuenciaActual}`);
    }
}