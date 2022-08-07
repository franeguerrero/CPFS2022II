"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, year, pages, topic) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.topic = topic;
    }
    Book.prototype.print = function () {
        console.log("".concat(this.title, " by ").concat(this.author));
        console.log('\n');
        console.log("Published in ".concat(this.year, ", ").concat(this.pages, " pages, ").concat(this.topic));
        console.log('\n.  .  .  .  .  .  .\n');
    };
    return Book;
}());
exports.Book = Book;
