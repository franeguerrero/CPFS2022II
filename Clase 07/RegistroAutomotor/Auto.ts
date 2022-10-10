import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo{

 
    constructor(nombre, marca, modelo, patente){
        super(nombre, marca, modelo, patente);
    }
    
    
    public picada(){
        console.log("Corres una picada.(Legal, en un picódromo)");
        
    }
}