// src/comentario/comentario.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateComentarioDTO } from './comentario.dto';

@Injectable()
export class ComentarioService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateComentarioDTO) {
        return this.prisma.comentario.create({
            data,
            include: { usuario: true },
        });
    }

    async listByTarefa(id_tarefa: number) {
        return this.prisma.comentario.findMany({
            where: { id_tarefa },
            include: { usuario: true },
            orderBy: { idcomentario: 'asc' },
        });
    }
}
