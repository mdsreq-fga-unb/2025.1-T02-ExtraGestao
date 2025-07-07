import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjetoDTO, UpdateProjetoDTO } from './projeto.dto';
export declare class ProjetoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProjetoDto: CreateProjetoDTO): Promise<{
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
    update(id: number, updateProjetoDto: UpdateProjetoDTO): Promise<{
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
    delete(id: number): Promise<{
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
    findAll(): Promise<{
        idprojeto: number;
        nome: string;
        valor: import("@prisma/client/runtime/library").Decimal;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        foto: Buffer;
        nome_gestor: string;
    }[]>;
    findById(id: number): Promise<{
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
    associateUserToProject(id_projeto: number, id_usuario: number): Promise<{
        idusuario: number;
        idprojeto: number;
    }>;
}
