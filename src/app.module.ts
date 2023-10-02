import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { InfraModule } from './infra/infra.module';
@Module({
  imports: [TodosModule, InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
