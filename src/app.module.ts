import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { GameService } from './game/game.service';
import { GameController } from './game/game.controller';
import { GameModule } from './game/game.module';
import { CardGameService } from './card-game/card-game.service';
import { CardGameController } from './card-game/card-game.controller';
import { CardGameModule } from './card-game/card-game.module';

@Module({
  imports: [UserModule, BookModule, GameModule, CardGameModule],
  controllers: [AppController, UserController, BookController, GameController, CardGameController],
  providers: [AppService, UserService, BookService, GameService, CardGameService],
})
export class AppModule {}
