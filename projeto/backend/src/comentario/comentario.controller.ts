// src/comentario/comentario.controller.ts
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { CreateComentarioDTO } from './comentario.dto';
import { JwtAuthGuardUser } from 'src/auth/jwt.guard';

@Controller('comentario')
export class ComentarioController {
    constructor(private readonly comentarioService: ComentarioService) { }

    @UseGuards(JwtAuthGuardUser)
    @Post('create')
    async create(@Body() dto: CreateComentarioDTO) {
        return this.comentarioService.create(dto);
    }

    @UseGuards(JwtAuthGuardUser)
    @Get('tarefa/:idTarefa')
    async listByTarefa(@Param('idTarefa') idTarefa: string) {
        return this.comentarioService.listByTarefa(Number(idTarefa));
    }
}
