import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { AssociateDTO, CreateProjetoDTO } from './projeto.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('projeto')
export class ProjetoController {
    constructor(private readonly projetoService: ProjetoService) { }

    @Post('create')
    @UseInterceptors(FileInterceptor('foto'))
    async createProjeto(
        @Body() body: CreateProjetoDTO,
        @UploadedFile() foto: Express.Multer.File
    ) {
        return this.projetoService.create({
            ...body,
            valor: Number(body.valor),
            data_inicio: new Date(body.data_inicio),
            prazo: new Date(body.prazo),
            id_gestor: Number(body.id_gestor),
            foto: foto ? foto.buffer : undefined
        });
    }

    @Patch('update/:id')
    @UseInterceptors(FileInterceptor('foto'))
    async updateProjeto(
        @Body() body: CreateProjetoDTO,
        @Param('id') id: number,
        @UploadedFile() foto: Express.Multer.File
    ) {
        return this.projetoService.update(Number(id), {
            ...body,
            valor: Number(body.valor),
            data_inicio: new Date(body.data_inicio),
            prazo: new Date(body.prazo),
            id_gestor: Number(body.id_gestor),
            foto: foto ? foto.buffer : body.foto,
        });
    }


    @Delete('delete/:id')
    deleteProjeto(@Param('id') id: number) {

        return this.projetoService.delete(Number(id));
    }

    @Get('list')
    async listProjetos() {
        const projetos = await this.projetoService.findAll();
        return projetos.map(p => ({
            ...p,
            foto: p.foto ? `data:image/png;base64,${Buffer.from(p.foto).toString('base64')}` : null
        }));
    }

    @Get('/:id')
    getProjetoById(@Param('id') id: number) {
        return this.projetoService.findById(id);
    }

    @Post('associate')
    associateProjeto(@Body() associateDto: AssociateDTO) {
        const { id_projeto, id_usuario } = associateDto;
        return this.projetoService.associateUserToProject(id_projeto, id_usuario);
    }

}
