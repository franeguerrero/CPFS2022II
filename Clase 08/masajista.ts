import { Persona } from './persona';
import { Futbolista } from './futbolista';

export class Masajista extends Persona {
    private clientes: Futbolista[] = [];

    public constructor(
        nombre: string,
        edad: number,
        sueldo: number,
        antiguedad: number,
        equipo: string,
        clientes: Futbolista[]
    ) {
        super(nombre, edad, sueldo, antiguedad, equipo);
        this.clientes = clientes;
    }

    public Rehabilitar(dorsal: number): void {
        for (let cliente of this.clientes) {
            if (cliente.getDorsal() === dorsal) {
                console.log(
                    this.nombre + ' rehabilita a ' + cliente.getNombre()
                );
            }
        }
    }
    public Masajear(dorsal: number): void {
        for (let cliente of this.clientes) {
            if (cliente.getDorsal() === dorsal) {
                console.log(this.nombre + ' masajea a ' + cliente.getNombre());
            }
        }
    }
}