import { Controller, Param, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service.js';
import { Book as BookModel } from 'src/generated/prisma/client';


@Controller('book')
export class BookController {
    constructor( 
        private readonly bookService: BookService
    ){}

    @Get(':id')
    async getBookById(@Param('id') id:string): Promise<BookModel | null>{
        return this.bookService.book({ id: Number(id) });
    }

    @Get('filtered/:searchString')
    async getFilteredBooks(
        @Param('searchString') searchString: string
    ): Promise<BookModel[]>{
        return this.bookService.books({
            where: {
                OR: [
                    {
                        title: { contains: searchString },
                    },
                    {
                        author: { contains: searchString },
                    }
                ],
            },
        });
    }

    @Post()
    async createDraft(
        @Body() postData: { title: string; content?: string; author: string; userId: number}
    ): Promise<BookModel> {
        const {title, content, author, userId} = postData;
        return this.bookService.createBook({
            title,
            content,
            author,
            owner: {
                connect: {id: userId}
            }
        });
    }

    @Delete(':id')
    async deleteBook(@Param('id') id:string): Promise<BookModel> {
        return this.bookService.deleteBook({id: Number(id)});
    }
}
