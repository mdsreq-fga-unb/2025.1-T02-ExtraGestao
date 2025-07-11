import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTarefaDTO, UpdateTarefaDTO } from './tarefa.dto';
export declare class TarefaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createTarefaDto: CreateTarefaDTO): Promise<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }>;
    update(id: string, updateTarefaDto: UpdateTarefaDTO): import(".prisma/client").Prisma.Prisma__tarefaClient<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__tarefaClient<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        gestor: {
            nome: string;
            idusuario: number;
        };
        responsavel_tarefa: {
            usuario: {
                nome: string;
                idusuario: number;
            };
        }[];
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
    findById(id: string): import(".prisma/client").Prisma.Prisma__tarefaClient<{
        idtarefa: number;
        nome: string;
        data_inicio: Date;
        prazo: Date;
        status: string;
        descricao: string;
        id_projeto: number | null;
        id_gestor: number | null;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    addResponsavel(id: string, responsavelId: string): Promise<{
        id_usuario: number;
        id_tarefa: number;
    }>;
}
