export abstract class Vehiculo {
    protected prendido: boolean;
    protected velocidad: number;
    protected color: string;
    protected marca: string;
    protected modelo: string;

    constructor(marca: string, modelo: string, color: string) {
        this.prendido = false;
        this.velocidad = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    public tooglePrendido(): void {
        this.prendido = !this.prendido;
        console.log(
            'El vehiculo esta ' + (this.prendido ? 'prendido' : 'apagado')
        );
    }
    abstract acelerar(n?: number): void;

    public frenar(n?: number): void {
        if (this.velocidad >= 0 && this.velocidad >= (n || 1)) {
            if (n) {
                this.velocidad -= n;
            } else {
                this.velocidad--;
            }
        }
    }
    public frenarEnSeco(): void {
        this.velocidad = 0;
    }
    public getVelocidad(): number {
        return this.velocidad;
    }
    public getColor(): string {
        return this.color;
    }
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
}
