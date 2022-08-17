import Vehiculo from "./Vehiculo";

export default class Moto extends Vehiculo {


    constructor(nombre, marca, modelo, patente){
        super(nombre, marca, modelo, patente);
    }

    public wheelie(){
        console.log("Levantas la rueda delantera");
        
    }

}