"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.modifyTitle = function (title, newTitle) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title === title) {
                book.title = newTitle;
            }
        }
    };
    BookManager.prototype.modifyAuthor = function (title, newAuthor) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title === title) {
                book.author = newAuthor;
            }
        }
    };
    BookManager.prototype.modifyYear = function (title, newYear) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title === title) {
                book.year = newYear;
            }
        }
    };
    BookManager.prototype.modifyPages = function (title, newPages) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title === title) {
                book.pages = newPages;
            }
        }
    };
    BookManager.prototype.modifyTopic = function (title, newTopic) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title === title) {
                book.topic = newTopic;
            }
        }
    };
    BookManager.prototype.deleteBook = function (title) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                this.books.splice(i, 1);
            }
        }
    };
    BookManager.prototype.alexandria = function () {
        console.log('Burning the library...');
        this.books = [];
    };
    BookManager.prototype.printBooks = function () {
        if (this.books.length === 0) {
            console.log('No books in the library');
        }
        else {
            this.books.forEach(function (book) { return book.print(); });
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
