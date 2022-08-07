export default class Auto {
    
    
    public marca: string;
    public modelo: string;
    private id: number;


    constructor(marca: string, modelo: string, id: number) {
        
        this.marca = marca;
        this.modelo = modelo;
        this.id = id;
    }


    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getID(): number {
        return this.id;
    }

    setID(id:number): void {
        this.id = id;
    }



}