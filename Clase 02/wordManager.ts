export class WordManager {

    private words: string[] = [];

    public constructor(words: string[]) {
        this.words = words;
    }  
    public getWords(): string[] {
        return this.words;
    }
    public getWord(index: number): string {
        return this.words[index];
    }
    public getWordIndex(word: string): number {
        return this.words.indexOf(word);
    }
    public addWord(word: string): void {
        this.words.push(word);
    }
    public removeWord(word: string): void {
        let index = this.words.indexOf(word);
        if (index > -1) {
            this.words.splice(index, 1);
        }
    }
    public modifyWord(word: string, newWord: string): void {
        let index = this.words.indexOf(word);
        if (index > -1) {
            this.words[index] = newWord;
        }
    }


} 