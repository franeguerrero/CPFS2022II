import { resta } from "./resta";
import { suma } from "./suma";
import * as fs from "fs";

let txt: string = fs.readFileSync("./numeros.txt", "utf8");
let numeros:string[] = txt.split(",");

console.log(suma(numeros));
console.log(resta(numeros));

