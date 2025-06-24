import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { ProjetoModule } from './projeto/projeto.module';
import { PrismaModule } from './prisma/prisma.module';
import { TarefaModule } from './tarefa/tarefa.module';

@Module({
  imports: [AuthModule, PrismaModule, TodoModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ProjetoModule,
    TarefaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
