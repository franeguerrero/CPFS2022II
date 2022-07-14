import { Persona } from './persona';

export class Futbolista extends Persona {
    private posicion: string;
    private dorsal: number;
    private goles: number;
    private pieHabil: string;
    private titular: boolean = false;

    public constructor(
        nombre: string,
        edad: number,
        sueldo: number,
        antiguedad: number,
        equipo: string,
        posicion: string,
        dorsal: number,
        goles: number,
        pieHabil: string
    ) {
        super(nombre, edad, sueldo, antiguedad, equipo);
        this.posicion = posicion;
        this.dorsal = dorsal;
        this.goles = goles;
        this.pieHabil = pieHabil;
    }
    public Entrenar(): void {
        console.log(this.nombre + ' entrena');
    }
    public HacerGol(): void {
        this.goles++;
        console.log(this.nombre + ' hace un gol');
    }
    public JugarPartido(): void {
        console.log(this.nombre + ' juega un partido');
    }
    public Atajar(posicion): void {
        if (posicion === 'arquero') {
            console.log(this.nombre + ' ataja');
        }
    }
    public HacerFalta(): void {
        console.log(this.nombre + ' hace una falta');
    }
    public getDorsal(): number {
        return this.dorsal;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getGoles(): number {
        return this.goles;
    }
    public setTitular(titular: boolean): void {
        this.titular = titular;
    }
}