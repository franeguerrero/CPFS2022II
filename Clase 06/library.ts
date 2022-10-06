import { Book } from './book';
import { BookManager } from './bookManager';

let BM = new BookManager();

BM.addBook(
    new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 1254, 'Fantasy')
);
BM.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 842, 'Fantasy'));
BM.addBook(
    new Book('The Catcher in the Rye', 'J.D. Salinger', 1951, 234, 'Fiction')
);
BM.addBook(
    new Book('The Grapes of Wrath', 'John Steinbeck', 1939, 234, 'Fiction')
);
BM.addBook(
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 234, 'Fiction')
);
BM.addBook(
    new Book('This book does not exist', 'Pancho Warrior', 1998, 1254, 'Sci-fi')
);
BM.printBooks();
console.log('\n-------------------------\n');

BM.modifyTitle('This book does not exist', 'Este libro no existe');
BM.modifyAuthor('Este libro no existe', 'Pancho the Great');
BM.modifyYear('Este libro no existe', 1999);
BM.modifyPages('Este libro no existe', 127);
BM.modifyTopic('Este libro no existe', 'Poetry');
BM.printBooks();

console.log('\n-------------------------\n');
BM.deleteBook('The Great Gatsby');
BM.printBooks();
console.log('\n-------------------------\n');
BM.alexandria();
BM.printBooks();
