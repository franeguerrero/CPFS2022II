import { Vehiculo } from './vehiculo';

export class AutoCiudad extends Vehiculo {
    constructor(marca: string, modelo: string, color: string) {
        super(marca, modelo, color);
    }
    public acelerar(n?: number): void {
        if (this.prendido && this.velocidad + (n || 1) <= 150) {
            if (n) {
                this.velocidad += n;
            } else {
                this.velocidad++;
            }
            console.log(`Velocidad actual: ${this.velocidad}`);
        } else {
            console.log('No te dá la nave, maquinola');
        }
    }
}
