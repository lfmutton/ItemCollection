import { Controller, Param, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { CardGame as CardGameModel } from 'src/generated/prisma/client';
import { CardGameService } from './card-game.service.js';

@Controller('card-game')
export class CardGameController {
    constructor( 
        private readonly cardGameService: CardGameService,
    ){}

    @Get(':id')
    async getCardGameById(@Param('id') id:string): Promise<CardGameModel | null>{
        return this.cardGameService.cardGame({ id: Number(id) });
    }

    @Get('filtered/:searchString')
    async getFilteredCardGames(
        @Param('searchString') searchString: string
    ): Promise<CardGameModel[]>{
        return this.cardGameService.cardGames({
            where: {
                OR: [
                    {
                        title: { contains: searchString },
                    },
                    {
                        company: { contains: searchString },
                    }
                ],
            },
        });
    }

    @Post()
    async createDraft(
        @Body() postData: { title: string; company?: string; userId: number}
    ): Promise<CardGameModel> {
        const {title, company, userId} = postData;
        return this.cardGameService.createCardGame({
            title,
            company,
            owner: {
                connect: {id: userId}
            }
        });
    }

    @Delete(':id')
    async deleteCardGame(@Param('id') id:string): Promise<CardGameModel> {
        return this.cardGameService.deleteCardGame({id: Number(id)});
    }
}

