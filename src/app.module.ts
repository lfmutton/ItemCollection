import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { BookModule } from './book/book.module.js';
import { GameModule } from './game/game.module.js';
import { CardGameModule } from './card-game/card-game.module.js';

@Module({
  imports: [UserModule, BookModule, GameModule, CardGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
