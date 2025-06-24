export interface ProjetoDTO {
    idprojeto: number;
    nome: string;
    valor: number;
    data_inicio: string;
    prazo: string;
    descricao: string;
    id_gestor: number;
    status: "EM_ANDAMENTO" | "CONCLUIDO";
    foto: string;
};