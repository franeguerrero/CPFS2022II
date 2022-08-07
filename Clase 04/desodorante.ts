class Desodorante {
    private marca:string;
    private carga:number = 100;
    private estaLleno:boolean;

    constructor(marca){
        this.marca = marca;

    }

    public usar(n = 5):void{
        if(this.carga > 0){
            this.carga -= n
            console.log(`A tu desodorante ${this.marca} le queda ${this.carga}%`)
        }else{
            this.estaLleno = false
            console.log(`Se te acabó el ${this.marca}, rey.`);
            
        }
    }

}
let dove = new Desodorante("Dove");
dove.usar();
dove.usar(90);
dove.usar()
dove.usar()