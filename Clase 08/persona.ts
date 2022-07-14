export class Persona {
    protected nombre: string;
    protected equipo: string;
    protected edad: number;
    protected antiguedad: number;
    protected sueldo: number;
    constructor(
        nombre: string,
        edad: number,
        sueldo: number,
        antiguedad: number,
        equipo: string
    ) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.antiguedad = antiguedad;
        this.equipo = equipo;
    }
    public Hablar(): void {
        console.log('Hola, soy ' + this.nombre);
    }
    public Concentrarse(): void {
        console.log(this.nombre + ' se concentra');
    }
}
