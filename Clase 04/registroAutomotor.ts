import Auto from './auto';


class RegistroAutomotor {

    Vehiculos: Auto[] = [];
    DeAlta: Auto[] = [];


    constructor( ListaVehiculos: Auto[] = []) {
        this.Vehiculos = ListaVehiculos;
    }

    getListaVehiculos(): Auto[] {
        return this.Vehiculos;
    }

    agregarVehiculo(vehiculo: Auto): Auto[] {
        this.Vehiculos.push(vehiculo);
        console.log("Vehiculo Agregado");
        return this.Vehiculos;
    }

    eliminarVehiculo(id: number) {
        let vehiculo = this.Vehiculos.find(Auto => Auto.getID() == id)
        if(vehiculo){
            this.Vehiculos.splice(this.Vehiculos.indexOf(vehiculo), 1);
            console.log("Vehiculo Eliminado");
            return this.Vehiculos;
        }
        else{
            console.log("No se encontro el vehiculo");
        }

    }

    actualizarVehiculo(id: number, newmarca: string, newmodelo: string,  newid: number ){

        let vehiculo = this.Vehiculos.find(Auto => Auto.getID() == id)
        if(vehiculo){
            vehiculo.setMarca(newmarca);
            vehiculo.setModelo(newmodelo);
            vehiculo.setID(newid);
            console.log("Vehiculo Actualizado");
            return this.Vehiculos;
        }
        else{
            console.log("No se encontro el vehiculo");
        }
    }

    darDeAlta(id: number){
            
            let vehiculo = this.Vehiculos.find(Auto => Auto.getID() == id)
            if(vehiculo){
                this.DeAlta.push(vehiculo);
                this.Vehiculos.splice(this.Vehiculos.indexOf(vehiculo), 1);
                console.log("Vehiculo dado de alta");
                return this.DeAlta;
            }
            else{
                console.log("No se encontro el vehiculo");
            }
        }

    
}



let porsche = new Auto("Porsche", "911", 1234)
let audi = new Auto("Audi", "A3", 2345)
let ford = new Auto("Ford", "Mustang", 3456)
let bmw = new Auto("BMW", "Serie 3", 4567)

let ListaVehiculos = [audi,ford]

let registroAuto = new RegistroAutomotor(ListaVehiculos)

registroAuto.agregarVehiculo(porsche)
registroAuto.agregarVehiculo(bmw)




