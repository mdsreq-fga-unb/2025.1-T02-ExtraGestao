export class CreateTarefaDTO {
    nome: string;
    data_inicio: Date;
    prazo: Date;
    status: string;
    descricao: string;
    id_projeto: number;
    id_gestor: number;
    responsaveis: number[];
}


export class UpdateTarefaDTO {
    nome?: string;
    data_inicio?: Date;
    prazo?: Date;
    id_gestor?: number;
}

export class TarefaDTO {
    idtarefa: number;
    nome: string;
    data_inicio: Date;
    prazo: Date;
    status: string;
    descricao: string;
    id_gestor: number;
    id_projeto: number;
}