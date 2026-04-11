import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { BookService } from './book.service.js';
import { BookController } from './book.controller.js';

@Module({
    providers: [BookService, PrismaService],
    controllers: [BookController]
})
export class BookModule {}
