export class Telefono {

    protected estaPrendido: boolean;
    protected bateriaActual: number;


    constructor(estaPrendido: boolean, bateriaActual: number) {
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }
    public mandarMensaje(mensaje: string): void {
        console.log(mensaje);
    }
    public hacerLlamada(numero: number): void {
        console.log(`Llamando a ${numero}`);
    }
    public prenderApagar(): void {
        this.estaPrendido = !this.estaPrendido;
        if (this.estaPrendido) {
            console.log('El telefono se ha prendido');
        } else {
            console.log('El telefono se ha apagado');
        }
    }
    public cargarBateria(carga: number): void {
        this.bateriaActual += carga;
        if (this.bateriaActual >= 100) {
            this.bateriaActual = 100;
            console.log('La bateria esta llena');
        } else {
            console.log(
                `La bateria se ha cargado ${carga}%, ahora tienes ${this.bateriaActual}%`
            );
        }
    }
}