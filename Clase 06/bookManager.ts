import { Book } from './book';

export class BookManager {
    private books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    modifyTitle(title: string, newTitle: string) {
        for (let book of this.books) {
            if (book.title === title) {
                book.title = newTitle;
            }
        }
    }
    modifyAuthor(title: string, newAuthor: string) {
        for (let book of this.books) {
            if (book.title === title) {
                book.author = newAuthor;
            }
        }
    }

    modifyYear(title: string, newYear: number) {
        for (let book of this.books) {
            if (book.title === title) {
                book.year = newYear;
            }
        }
    }
    modifyPages(title: string, newPages: number) {
        for (let book of this.books) {
            if (book.title === title) {
                book.pages = newPages;
            }
        }
    }
    modifyTopic(title: string, newTopic: string) {
        for (let book of this.books) {
            if (book.title === title) {
                book.topic = newTopic;
            }
        }
    }

    deleteBook(title: string) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                this.books.splice(i, 1);
            }
        }
    }

    alexandria() {
        console.log('Burning the library...');
        this.books = [];
    }

    printBooks() {
        if (this.books.length === 0) {
            console.log('No books in the library');
        } else {
            this.books.forEach((book) => book.print());
        }
    }
}
