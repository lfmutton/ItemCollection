import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CardGameService } from './card-game.service.js';
import { CardGameController } from './card-game.controller.js';

@Module({
    providers: [CardGameService, PrismaService],
    controllers: [CardGameController]
})
export class CardGameModule {}
