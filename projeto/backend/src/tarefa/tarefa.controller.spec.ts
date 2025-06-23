import { Test, TestingModule } from '@nestjs/testing';
import { TarefaController } from './tarefa.controller';

describe('TarefaController', () => {
  let controller: TarefaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarefaController],
    }).compile();

    controller = module.get<TarefaController>(TarefaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
