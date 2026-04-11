import { Injectable } from '@nestjs/common';
import { CardGame, Prisma } from 'src/generated/prisma/client';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CardGameService {

    constructor(private prisma: PrismaService) {}

    async cardGame(
        cardGameWhereUniqueInput: Prisma.CardGameWhereUniqueInput,
    ): Promise<CardGame | null>{
        return this.prisma.cardGame.findUnique({
            where: cardGameWhereUniqueInput
        })
    }

    async cardGames(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CardGameWhereUniqueInput;
        where?: Prisma.CardGameWhereInput;
        orderBy?: Prisma.CardGameOrderByWithRelationInput;
    }): Promise<CardGame[]>{
        const {skip, take, cursor, where, orderBy} = params;
        return this.prisma.cardGame.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createCardGame(data: Prisma.GameCreateInput): Promise<CardGame>{
        return this.prisma.cardGame.create({
            data
        });
    }

    async updateCardGame(params: {
        where: Prisma.CardGameWhereUniqueInput;
        data: Prisma.GameUpdateInput;
    }): Promise<CardGame>{
        const {data, where} = params;
        return this.prisma.cardGame.update({
            data,
            where
        });
    }

    async deleteCardGame(where: Prisma.CardGameWhereUniqueInput): Promise<CardGame>{
        return this.prisma.cardGame.delete({
            where
        });
    }
}
