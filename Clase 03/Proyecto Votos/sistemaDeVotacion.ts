import * as fs from 'fs'

let votantes:string = fs.readFileSync('votantes.txt', 'utf8')
let escuelas:string = fs.readFileSync('escuelas.txt', 'utf8')
let arregloVotantes:string[] = votantes.split(','); 
let arregloEscuelas:string[] = escuelas.split(','); 


function buscarDondeVoto(votante:string){

    if(arregloVotantes.find(persona => persona === votante)){

        if(votante.startsWith("F")){
            return arregloEscuelas[0]
        }
        else if(votante.startsWith("A")){
            return arregloEscuelas[1]
        }
        else if(votante.startsWith("Ñ")){
            return arregloEscuelas[2]
        }
    }

    else{
        return "No puedes votar"
    }
}
console.log(arregloEscuelas)
console.log(arregloVotantes);

console.log(buscarDondeVoto("Filadelfio"))