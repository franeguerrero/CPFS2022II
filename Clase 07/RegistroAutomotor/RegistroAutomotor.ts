import Vehiculo from './Vehiculo';
import Moto from './Moto';
import Camion from './Camion';
import Auto from './Auto';

class RegistroAutomotor {

    private ListaVehiculos: Vehiculo[] = [];
    private DadosDeAlta: Vehiculo[] = [];


    public constructor( ListaVehiculos: Vehiculo[] = []) {
        this.ListaVehiculos = ListaVehiculos;
    }

    public getListaVehiculos(): Vehiculo[] {
        return this.ListaVehiculos;
    }

    public agregarVehiculo(vehiculo: Vehiculo): Vehiculo[] {
        this.ListaVehiculos.push(vehiculo);
        console.log("Vehiculo Agregado");
        return this.ListaVehiculos;
    }

    public eliminarVehiculo(patente: string) {
        let vehiculo = this.ListaVehiculos.find(Vehiculo => Vehiculo.getPatente() == patente)
        if(vehiculo){
            this.ListaVehiculos.splice(this.ListaVehiculos.indexOf(vehiculo), 1);
            console.log("Vehiculo Eliminado");
            return this.ListaVehiculos;
        }
        else{
            console.log("No se encontro el vehiculo");
        }

    }

    public actualizarVehiculo(patente: string, newnombre: string, newmarca: string, newmodelo: string,  newpatente: string ){

        let vehiculo = this.ListaVehiculos.find(Vehiculo => Vehiculo.getPatente() == patente)
        if(vehiculo){
            vehiculo.setNombre(newnombre);
            vehiculo.setMarca(newmarca);
            vehiculo.setModelo(newmodelo);
            vehiculo.setPatente(newpatente);
            console.log("Vehiculo Actualizado");
            return this.ListaVehiculos;
        }
        else{
            console.log("No se encontro el vehiculo");
        }
    }

    public darDeAlta(patente: string){
            
            let vehiculo = this.ListaVehiculos.find(Vehiculo => Vehiculo.getPatente() == patente)
            if(vehiculo){
                this.DadosDeAlta.push(vehiculo);
                this.ListaVehiculos.splice(this.ListaVehiculos.indexOf(vehiculo), 1);
                console.log("Vehiculo dado de alta");
                return this.DadosDeAlta;
            }
            else{
                console.log("No se encontro el vehiculo");
            }
        }

    
}



let audi = new Camion("Audi1", "Audi", "1997", "238")
let audi2 = new Moto("Audi2", "Audi", "1997", "237")
let audi3 = new Auto("Audi3", "Audi", "1997", "235")
let audi4 = new Auto("Audi4", "Audi", "1997", "234")

let ListaVehiculos = [audi,audi2]

let registroAuto = new RegistroAutomotor(ListaVehiculos)

registroAuto.agregarVehiculo(audi3)
registroAuto.agregarVehiculo(audi4)




