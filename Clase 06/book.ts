export class Book {
    title: string;
    author: string;
    year: number;
    pages: number;
    topic: string;

    constructor(title, author, year, pages, topic) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.topic = topic;
    }
    print() {
        console.log(`${this.title} by ${this.author}`);
        console.log('\n');

        console.log(
            `Published in ${this.year}, ${this.pages} pages, ${this.topic}`
        );
        console.log('\n.  .  .  .  .  .  .\n');
    }
}
