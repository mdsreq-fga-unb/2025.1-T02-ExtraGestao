"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TarefaService = class TarefaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createTarefaDto) {
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
            await Promise.all(createTarefaDto.responsaveis.map(id_usuario => this.prismaService.responsavel_tarefa.create({
                data: {
                    id_tarefa: tarefa.idtarefa,
                    id_usuario: id_usuario,
                }
            })));
        }
        return tarefa;
    }
    update(id, updateTarefaDto) {
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
    delete(id) {
        return this.prismaService.tarefa.delete({
            where: { idtarefa: Number(id) },
        });
    }
    findAll() {
        return this.prismaService.tarefa.findMany({
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
        });
    }
    findById(id) {
        return this.prismaService.tarefa.findUnique({
            where: { idtarefa: Number(id) },
        });
    }
    async addResponsavel(id, responsavelId) {
        return this.prismaService.responsavel_tarefa.create({
            data: {
                id_tarefa: Number(id),
                id_usuario: Number(responsavelId),
            }
        });
    }
};
exports.TarefaService = TarefaService;
exports.TarefaService = TarefaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TarefaService);
//# sourceMappingURL=tarefa.service.js.map