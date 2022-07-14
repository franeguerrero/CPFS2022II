"use strict";
exports.__esModule = true;
exports.WordManager = void 0;
var WordManager = /** @class */ (function () {
    function WordManager(words) {
        this.words = [];
        this.words = words;
    }
    WordManager.prototype.getWords = function () {
        return this.words;
    };
    WordManager.prototype.getWord = function (index) {
        return this.words[index];
    };
    WordManager.prototype.getWordIndex = function (word) {
        return this.words.indexOf(word);
    };
    WordManager.prototype.addWord = function (word) {
        this.words.push(word);
    };
    WordManager.prototype.removeWord = function (word) {
        var index = this.words.indexOf(word);
        if (index > -1) {
            this.words.splice(index, 1);
        }
    };
    WordManager.prototype.modifyWord = function (word, newWord) {
        var index = this.words.indexOf(word);
        if (index > -1) {
            this.words[index] = newWord;
        }
    };
    return WordManager;
}());
exports.WordManager = WordManager;
