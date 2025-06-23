import { CreateTarefaDTO, UpdateTarefaDTO } from './tarefa.dto';
import { TarefaService } from './tarefa.service';
export declare class TarefaController {
    private readonly tarefaService;
    constructor(tarefaService: TarefaService);
    createTarefa(createTarefaDto: CreateTarefaDTO): Promise<{
        idtarefa: number;
        nome: string | null;
        data_inicio: Date | null;
        prazo: Date | null;
        status: string | null;
        descricao: string | null;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
    updateTarefa(id: string, updateTarefaDto: UpdateTarefaDTO): Promise<{
        idtarefa: number;
        nome: string | null;
        data_inicio: Date | null;
        prazo: Date | null;
        status: string | null;
        descricao: string | null;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
    deleteTarefa(id: string): Promise<{
        idtarefa: number;
        nome: string | null;
        data_inicio: Date | null;
        prazo: Date | null;
        status: string | null;
        descricao: string | null;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
    listTarefas(): Promise<{
        idtarefa: number;
        nome: string | null;
        data_inicio: Date | null;
        prazo: Date | null;
        status: string | null;
        descricao: string | null;
        id_projeto: number | null;
        id_gestor: number | null;
    }[]>;
    getTarefaById(id: string): Promise<{
        idtarefa: number;
        nome: string | null;
        data_inicio: Date | null;
        prazo: Date | null;
        status: string | null;
        descricao: string | null;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
}
