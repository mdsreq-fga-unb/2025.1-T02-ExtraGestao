import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {JwtAuthGuardAdmin, JwtAuthGuardUser} from "../auth/jwt.guard";
import {CreateTodoDTO, UpdateTodoDTO} from "./todo.dto";

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    //rotas de administrador
    @UseGuards(JwtAuthGuardAdmin)
    @Post('create')
    async create(@Body() todoPayload: CreateTodoDTO){
        return await this.todoService.create(todoPayload);
    }

    @UseGuards(JwtAuthGuardAdmin)
    @Put('update')
    async update(@Body() todoPayload: UpdateTodoDTO){
        return await this.todoService.update(todoPayload);
    }

    @UseGuards(JwtAuthGuardAdmin)
    @Delete('destroy/:id')
    async destroy(@Param() id: number){
        return await this.todoService.destroy(id);
    }

    //rotas de usuário

    @UseGuards(JwtAuthGuardUser)
    @Get('list')
    async list(){
        return this.todoService.list();
    }

    @UseGuards(JwtAuthGuardUser)
    @Get('retrieve/:id')
    async retrieve(@Param('id', ParseIntPipe) id: number){
        return await this.todoService.retrieve(id);
    }

}
