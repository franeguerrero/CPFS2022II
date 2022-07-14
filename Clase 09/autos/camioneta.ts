import { Vehiculo } from './vehiculo';

export class Camioneta extends Vehiculo {
    private cuatroXcuatro: boolean = false;
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
    public toogleCuatroXcuatro(): void {
        console.log(
            'La camioneta esta ' + (this.cuatroXcuatro ? 'en 4x4' : 'en 4x2')
        );
    }
}
