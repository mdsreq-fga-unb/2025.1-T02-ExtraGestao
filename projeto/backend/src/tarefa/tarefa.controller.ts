import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuardUser } from 'src/auth/jwt.guard';
import { CreateTarefaDTO, UpdateTarefaDTO } from './tarefa.dto';
import { TarefaService } from './tarefa.service';

@Controller('tarefa')
export class TarefaController {
    constructor(private readonly tarefaService: TarefaService) { }

    @UseGuards(JwtAuthGuardUser)
    @Post('create')
    async createTarefa(@Body() createTarefaDto: CreateTarefaDTO) {
        return this.tarefaService.create(createTarefaDto);
    }

    @Patch('update/:id')
    async updateTarefa(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDTO) {
        return this.tarefaService.update(id, updateTarefaDto);
    }

    @Delete('delete/:id')
    async deleteTarefa(@Param('id') id: string) {
        return this.tarefaService.delete(id);
    }

    @Get('list')
    async listTarefas() {
        return this.tarefaService.findAll();
    }

    @Get(':id')
    async getTarefaById(@Param('id') id: string) {
        return this.tarefaService.findById(id);
    }

}
