import Vehiculo from "./Vehiculo";

export default class Camion extends Vehiculo{

 
    constructor(nombre, marca, modelo, patente){
        super(nombre, marca, modelo, patente);
    }
    
    public engancharAcoplado(){
        console.log("Enganchas el acoplado.");
        
    }
}