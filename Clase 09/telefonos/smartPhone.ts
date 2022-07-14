import { Telefono } from './telefono';

class SmartPhone implements Telefono {
    private estaPrendido: boolean;
    private numero: number;

    constructor(numero: number) {
        this.estaPrendido = false;
        this.numero = numero;
    }

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }

    public llamar(numero: number): void {
        if (this.estaPrendido && numero !== this.numero) {
            console.log(`Llamando al numero ${numero}`);
        }
    }
    public sacarFoto(): void {
        if (this.estaPrendido) {
            console.log(`Sacando foto`);
        }
    }
}
