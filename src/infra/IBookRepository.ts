import { Book } from '../domain/Book'

interface IBookRepository {
    save(book: Book): Promise<boolean>
}

export type { IBookRepository }