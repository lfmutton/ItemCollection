import { Module } from '@nestjs/common';
import { GameService } from './game.service.js';
import { PrismaService } from '../prisma.service.js';
import { GameController } from './game.controller.js';

@Module({
    providers: [GameService, PrismaService],
    controllers: [GameController]
})
export class GameModule {}
