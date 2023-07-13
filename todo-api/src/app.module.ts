import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './app/todo/todo.module';
import * as ormConfig from './orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
