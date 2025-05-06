import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateTodoDTO, UpdateTodoDTO} from "./todo.dto";

@Injectable()
export class TodoService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async create(todoPayload: CreateTodoDTO){
        return this.prismaService.todo.create({
            data: {
                TITLE: todoPayload.title,
                DESCRIPTION: todoPayload.description,
            }
        });
    }

    async update(todoPayload: UpdateTodoDTO){
        return this.prismaService.todo.update({
            where: {
                IDTODO: todoPayload.id
            },
            data: {
                TITLE: todoPayload.title,
                DESCRIPTION: todoPayload.description,
            }
        });
    }

    async destroy(id: number){
        return this.prismaService.todo.delete({
            where: {
                IDTODO: id
            }
        });
    }

    async list(){
        return this.prismaService.todo.findMany();
    }

    async retrieve(id: number){
        return this.prismaService.todo.findUnique({
            where: {
                IDTODO: id
            }
        });
    }
}
