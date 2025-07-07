import { CreateTarefaDTO, UpdateTarefaDTO } from './tarefa.dto';
import { TarefaService } from './tarefa.service';
export declare class TarefaController {
    private readonly tarefaService;
    constructor(tarefaService: TarefaService);
    createTarefa(createTarefaDto: CreateTarefaDTO): Promise<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
    updateTarefa(id: string, updateTarefaDto: UpdateTarefaDTO): Promise<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
    deleteTarefa(id: string): Promise<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
    listTarefas(): Promise<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }[]>;
    getTarefaById(id: string): Promise<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
}
