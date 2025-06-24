export declare class CreateProjetoDTO {
    nome: string;
    valor: number;
    data_inicio: Date;
    prazo: Date;
    id_gestor: number;
    foto: Buffer;
    descricao: string;
}
export declare class UpdateProjetoDTO {
    nome?: string;
    valor?: number;
    data_inicio?: Date;
    prazo?: Date;
    id_gestor?: number;
    foto?: Buffer;
    status?: string;
    descricao?: string;
}
export declare class ProjetoDTO {
    id: number;
    nome: string;
    valor: number;
    data_inicio: Date;
    prazo: Date;
    id_gestor: number;
    foto: string;
    status: string;
    descricao: string;
}
export declare class AssociateDTO {
    id_projeto: number;
    id_usuario: number;
}
