import { WordManager } from "./wordManager";
import * as fs from "fs";


let array: string[] = ["hola", "mundo", "como", "estas"];
let wordManager: WordManager = new WordManager(array);
console.log(wordManager.getWords());
console.log(wordManager.getWord(2));
console.log(wordManager.getWordIndex("hola"));
wordManager.addWord("manzanas");
console.log(wordManager.getWords());
wordManager.removeWord("hola");
console.log(wordManager.getWords());
wordManager.modifyWord("como", "comete");
console.log(wordManager.getWords());

// ------------------------------

let texto: string = fs.readFileSync("./abc.txt", "utf8");
let palabras: string[] = texto.split(" ");
console.log(palabras); 