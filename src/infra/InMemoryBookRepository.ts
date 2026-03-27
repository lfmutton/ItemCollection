import { Book } from "src/domain/Book";
import { IBookRepository } from "./IBookRepository";

export class InMemoryBookRepository implements IBookRepository {
    private readonly _books: Book[] = []

    public async save(book: Book): Promise<boolean> {
        this._books.push(book)
        
        return true;
    }
}