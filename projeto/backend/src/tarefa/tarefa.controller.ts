import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuardAdmin, JwtAuthGuardUser } from 'src/auth/jwt.guard';
import { CreateTarefaDTO, UpdateTarefaDTO } from './tarefa.dto';
import { TarefaService } from './tarefa.service';

@Controller('tarefa')
export class TarefaController {
    constructor(private readonly tarefaService: TarefaService) { }

    @UseGuards(JwtAuthGuardAdmin)
    @Post('create')
    async createTarefa(@Body() createTarefaDto: CreateTarefaDTO) {
        return this.tarefaService.create(createTarefaDto);
    }

    @UseGuards(JwtAuthGuardAdmin)
    @Patch('update/:id')
    async updateTarefa(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDTO) {
        return this.tarefaService.update(id, updateTarefaDto);
    }

    @UseGuards(JwtAuthGuardAdmin)
    @Delete('delete/:id')
    async deleteTarefa(@Param('id') id: string) {
        return this.tarefaService.delete(id);
    }

    @UseGuards(JwtAuthGuardUser)
    @Get('list')
    async listTarefas() {
        return this.tarefaService.findAll();
    }

    @UseGuards(JwtAuthGuardUser)
    @Get(':id')
    async getTarefaById(@Param('id') id: string) {
        return this.tarefaService.findById(id);
    }

    @UseGuards(JwtAuthGuardAdmin)
    @Post('addResponsavel/:id')
    async addResponsavel(@Param('id') id: string, @Body('responsavelId') responsavelId: string) {
        return this.tarefaService.addResponsavel(id, responsavelId);
    }
}
