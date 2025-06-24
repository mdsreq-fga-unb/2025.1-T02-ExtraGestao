import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTarefaDTO, UpdateTarefaDTO } from './tarefa.dto';

@Injectable()
export class TarefaService {
    constructor(private readonly prismaService: PrismaService) { }

    async create(createTarefaDto: CreateTarefaDTO) {
        const tarefa = await this.prismaService.tarefa.create({
            data: {
                nome: createTarefaDto.nome,
                descricao: createTarefaDto.descricao,
                data_inicio: new Date(createTarefaDto.data_inicio),
                prazo: new Date(createTarefaDto.prazo),
                status: createTarefaDto.status,
                id_projeto: createTarefaDto.id_projeto,
                id_gestor: createTarefaDto.id_gestor,
            },
        });

        if (createTarefaDto.responsaveis && createTarefaDto.responsaveis.length > 0) {
            await Promise.all(
                createTarefaDto.responsaveis.map(id_usuario =>
                    this.prismaService.responsavel_tarefa.create({
                        data: {
                            id_tarefa: tarefa.idtarefa,
                            id_usuario: id_usuario,
                        }
                    })
                )
            );
        }

        return tarefa;
    }
    update(id: string, updateTarefaDto: UpdateTarefaDTO) {
        return this.prismaService.tarefa.update({
            where: { idtarefa: Number(id) },
            data: updateTarefaDto,
        });
    }
    delete(id: string) {
        return this.prismaService.tarefa.delete({
            where: { idtarefa: Number(id) },
        });
    }
    findAll() {
        return this.prismaService.tarefa.findMany();
    }
    findById(id: string) {
        return this.prismaService.tarefa.findUnique({
            where: { idtarefa: Number(id) },
        });
    }

}
