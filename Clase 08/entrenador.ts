import { Persona } from './persona';
import { Futbolista } from './futbolista';

export class Entrenador extends Persona {
    private jugadores: Futbolista[] = [];

    public constructor(
        nombre: string,
        edad: number,
        sueldo: number,
        antiguedad: number,
        equipo: string,
        jugadores: Futbolista[]
    ) {
        super(nombre, edad, sueldo, antiguedad, equipo);
        this.jugadores = jugadores;
    }
    public Entrenar(): void {
        console.log(this.nombre + ' entrena a ' + this.equipo);
    }

    public Dirigir(): void {
        console.log(this.nombre + ' dirige a ' + this.equipo);
    }

    public Planificar(): void {
        console.log(this.nombre + ' planifica jugadas');
    }
    public DefinirTitulares(dorsal: number): void {
        for (let jugador of this.jugadores) {
            if (jugador.getDorsal() === dorsal) {
                jugador.setTitular(true);
                console.log(jugador.getNombre() + ' ahora es titular');
            }
        }
    }
}