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
        if (updateTarefaDto.data_inicio) {
            updateTarefaDto.data_inicio = new Date(updateTarefaDto.data_inicio);
        }
        if (updateTarefaDto.prazo) {
            updateTarefaDto.prazo = new Date(updateTarefaDto.prazo);
        }
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
        return this.prismaService.tarefa.findMany(
            {
                include: {
                    responsavel_tarefa: {
                        select: {
                            usuario: {
                                select: {
                                    idusuario: true,
                                    nome: true,
                                }
                            }
                        }
                    },
                    gestor: {
                        select: {
                            idusuario: true,
                            nome: true,
                        }
                    }
                }
            }
        );
    }
    findById(id: string) {
        return this.prismaService.tarefa.findUnique({
            where: { idtarefa: Number(id) },
        });
    }

    async addResponsavel(id: string, responsavelId: string) {
        return this.prismaService.responsavel_tarefa.create({
            data: {
                id_tarefa: Number(id),
                id_usuario: Number(responsavelId),
            }
        });
    }
}
