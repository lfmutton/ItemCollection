import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { PrismaService } from '../prisma.service.js';
import { UserController } from './user.controller.js';

@Module({
    providers: [UserService, PrismaService],
    controllers: [UserController]
})
export class UserModule {}
