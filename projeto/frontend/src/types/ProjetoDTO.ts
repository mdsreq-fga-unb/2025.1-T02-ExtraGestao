export interface ProjetoDTO {
    idprojeto: number;
    nome: string;
    valor: number;
    data_inicio: string;
    prazo: string;
    descricao: string;
    nome_gestor: string;
    status: "EM_ANDAMENTO" | "CONCLUIDO";
    foto: string;
};