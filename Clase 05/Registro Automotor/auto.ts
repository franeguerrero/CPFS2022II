export default class Auto {
    
    
    private marca: string;
    private modelo: string;
    private id: number;


    public constructor(marca: string, modelo: string, id: number) {
        
        this.marca = marca;
        this.modelo = modelo;
        this.id = id;
    }


    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getID(): number {
        return this.id;
    }

    public setID(id:number): void {
        this.id = id;
    }



}