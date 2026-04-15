import { Controller, Param, Get, Delete, Body, Post } from '@nestjs/common';
import { GameService } from './game.service.js';
import { Game as GameModel } from 'src/generated/prisma/client';

@Controller('game')
export class GameController {
    constructor( 
        private readonly gameService: GameService,
    ){}

    @Get(':id')
    async getGameById(@Param('id') id:string): Promise<GameModel | null>{
        return this.gameService.game({ id: Number(id) });
    }

    @Get('filtered/:searchString')
    async getFilteredGames(
        @Param('searchString') searchString: string
    ): Promise<GameModel[]>{
        return this.gameService.games({
            where: {
                OR: [
                    {
                        title: { contains: searchString },
                    },
                    {
                        company: { contains: searchString}
                    }
                ],
            },
        });
    }

    @Get('userId/:ownerId')
        async getGameByOwnerId(
            @Param('ownerId') ownerId: string
        ): Promise<GameModel[]> {
            return this.gameService.games({
                where: {
                    ownerId: Number(ownerId)
                }   
            });
        }

    @Post()
    async createDraft(
        @Body() postData: { title: string;  company: string; userId: number}
    ): Promise<GameModel> {
        const {title, company, userId} = postData;
        return this.gameService.createGame({
            title,
            company,
            owner: {
                connect: {id: userId}
            }
        });
    }

    @Delete(':id')
    async deleteGame(@Param('id') id:string): Promise<GameModel> {
        return this.gameService.deleteGame({id: Number(id)});
    }
}

