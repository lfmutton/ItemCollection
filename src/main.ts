import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiServer } from './presentation/ApiServer';
import { InMemoryBookRepository } from './infra/InMemoryBookRepository';
import { CreateBookUseCase } from './app/CreateBookUseCase';
import { CreateBookController } from './presentation/CreateBookController';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();


async function main() {
  const inMemoryRepo = new InMemoryBookRepository()
  const useCase = new CreateBookUseCase(inMemoryRepo);
  const bookController = new CreateBookController(useCase)

  await ApiServer.run(5000, bookController)
}

main()