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
    listTarefas(): Promise<({
        responsavel_tarefa: {
            usuario: {
                idusuario: number;
                nome: string;
            };
        }[];
        gestor: {
            idusuario: number;
            nome: string;
        };
    } & {
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    })[]>;
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
    addResponsavel(id: string, responsavelId: string): Promise<{
        id_usuario: number;
        id_tarefa: number;
    }>;
}
