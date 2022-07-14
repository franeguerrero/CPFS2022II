import { Vehiculo } from './vehiculo';

export class AutoDeportivo extends Vehiculo {
    constructor(marca: string, modelo: string, color: string) {
        super(marca, modelo, color);
    }
    public acelerar(n?: number): void {
        if (this.prendido) {
            if (n) {
                this.velocidad += n;
            } else {
                this.velocidad++;
            }
            console.log(`Velocidad actual: ${this.velocidad}`);
        }
    }
}
