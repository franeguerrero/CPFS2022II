"use strict";
exports.__esModule = true;
var wordManager_1 = require("./wordManager");
var fs = require("fs");
var array = ["hola", "mundo", "como", "estas"];
var wordManager = new wordManager_1.WordManager(array);
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
var texto = fs.readFileSync("./abc.txt", "utf8");
var palabras = texto.split(" ");
console.log(palabras);
