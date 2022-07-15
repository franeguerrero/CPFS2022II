export class Alumno {
    private nombre: string;
    private nota: number;
    private aprobado: string;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
        this.aprobado = this.nota >= 7 ? 'aprobado/a' : 'desaprobado/a';
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getNota(): void {
        console.log(`${this.nombre} está ${this.aprobado} con ${this.nota}`);
        
    }
}