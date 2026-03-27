import { Book } from '../domain/Book'
import { IBookRepository } from '../infra/IBookRepository'

interface ICreateBookDto {
    name: string
    userId: string
}

interface ICreateBookResult {
    bookId: string
}



export class CreateBookUseCase {
    public constructor(private readonly _bookRepo: IBookRepository){}

    public async execute(input: ICreateBookDto): Promise<ICreateBookResult> {
        const book = new Book(input.name, input.userId)

        const result = await this._bookRepo.save(book)

        if(!result) {
            throw new Error("Book wasn't saved succesfully")
        }

       return {
            bookId: book.id
        }
    }
}