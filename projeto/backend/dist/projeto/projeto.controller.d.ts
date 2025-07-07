import { ProjetoService } from './projeto.service';
import { AssociateDTO, CreateProjetoDTO } from './projeto.dto';
export declare class ProjetoController {
    private readonly projetoService;
    constructor(projetoService: ProjetoService);
    createProjeto(body: CreateProjetoDTO, foto: Express.Multer.File): Promise<{
        idprojeto: number;
        nome: string;
        valor: import("@prisma/client/runtime/library").Decimal;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        foto: Buffer;
        id_gestor: number;
    }>;
    updateProjeto(body: CreateProjetoDTO, id: number, foto: Express.Multer.File): Promise<{
        idprojeto: number;
        nome: string;
        valor: import("@prisma/client/runtime/library").Decimal;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        foto: Buffer;
        id_gestor: number;
    }>;
    deleteProjeto(id: number): Promise<{
        idprojeto: number;
        nome: string;
        valor: import("@prisma/client/runtime/library").Decimal;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        foto: Buffer;
        id_gestor: number;
    }>;
    listProjetos(): Promise<{
        foto: string;
        idprojeto: number;
        nome: string;
        valor: import("@prisma/client/runtime/library").Decimal;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        nome_gestor: string;
    }[]>;
    getProjetoById(id: number): Promise<{
        idprojeto: number;
        nome: string;
        valor: import("@prisma/client/runtime/library").Decimal;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        foto: Buffer;
        id_gestor: number;
    }>;
    associateProjeto(associateDto: AssociateDTO): Promise<{
        idusuario: number;
        idprojeto: number;
    }>;
}
