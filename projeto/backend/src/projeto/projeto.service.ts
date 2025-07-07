import { Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjetoDTO, UpdateProjetoDTO } from './projeto.dto';
import { JwtAuthGuardUser } from 'src/auth/jwt.guard';


@Injectable()
export class ProjetoService {
    constructor(private readonly prisma: PrismaService) { }

    @UseGuards(JwtAuthGuardUser)
    async create(createProjetoDto: CreateProjetoDTO) {
        return this.prisma.projeto.create({
            data: {
                nome: createProjetoDto.nome,
                valor: createProjetoDto.valor,
                data_inicio: new Date(createProjetoDto.data_inicio),
                prazo: new Date(createProjetoDto.prazo),
                id_gestor: createProjetoDto.id_gestor,
                foto: createProjetoDto.foto,
                status: 'Em andamento',
                descricao: createProjetoDto.descricao,
            }
        });
    }


    async update(id: number, updateProjetoDto: UpdateProjetoDTO) {
        const projetoAtual = await this.prisma.projeto.findUnique({ where: { idprojeto: id } });

        return this.prisma.projeto.update({
            where: { idprojeto: id },
            data: {
                nome: updateProjetoDto.nome ?? projetoAtual.nome,
                valor: updateProjetoDto.valor ?? projetoAtual.valor,
                data_inicio: updateProjetoDto.data_inicio ? new Date(updateProjetoDto.data_inicio) : projetoAtual.data_inicio,
                prazo: updateProjetoDto.prazo ? new Date(updateProjetoDto.prazo) : projetoAtual.prazo,
                status: updateProjetoDto.status ?? projetoAtual.status,
                descricao: updateProjetoDto.descricao ?? projetoAtual.descricao,
                foto: updateProjetoDto.foto ?? projetoAtual.foto,
                ...(updateProjetoDto.id_gestor
                    ? { gestor: { connect: { idusuario: Number(updateProjetoDto.id_gestor) } } }
                    : {}),
            },
        });
    }


    @UseGuards(JwtAuthGuardUser)
    async delete(id: number) {
        return this.prisma.projeto.delete({
            where: { idprojeto: id },
        });
    }

    async findAll() {
        const projetos = await this.prisma.projeto.findMany({
            include: {
                gestor: {
                    select: { nome: true }
                }
            }
        });

        return projetos.map(p => ({
            idprojeto: p.idprojeto,
            nome: p.nome,
            valor: p.valor,
            data_inicio: p.data_inicio,
            prazo: p.prazo,
            status: p.status,
            descricao: p.descricao,
            foto: p.foto,
            nome_gestor: p.gestor?.nome ?? null
        }));
    }


    @UseGuards(JwtAuthGuardUser)
    async findById(id: number) {
        return this.prisma.projeto.findUnique({
            where: { idprojeto: id },
        });
    }

    @UseGuards(JwtAuthGuardUser)
    async associateUserToProject(id_projeto: number, id_usuario: number) {
        return this.prisma.usuario_projeto.create({
            data: {
                idusuario: id_usuario,
                idprojeto: id_projeto,
            }
        });
    }

}
