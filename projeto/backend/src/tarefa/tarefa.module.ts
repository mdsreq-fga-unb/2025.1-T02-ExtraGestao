import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';

@Module({
  providers: [TarefaService],
  controllers: [TarefaController]
})
export class TarefaModule {}
