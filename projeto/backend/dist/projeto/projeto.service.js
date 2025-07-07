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
exports.ProjetoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const projeto_dto_1 = require("./projeto.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
let ProjetoService = class ProjetoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProjetoDto) {
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
    async update(id, updateProjetoDto) {
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
    async delete(id) {
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
    async findById(id) {
        return this.prisma.projeto.findUnique({
            where: { idprojeto: id },
        });
    }
    async associateUserToProject(id_projeto, id_usuario) {
        return this.prisma.usuario_projeto.create({
            data: {
                idusuario: id_usuario,
                idprojeto: id_projeto,
            }
        });
    }
};
exports.ProjetoService = ProjetoService;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projeto_dto_1.CreateProjetoDTO]),
    __metadata("design:returntype", Promise)
], ProjetoService.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjetoService.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjetoService.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProjetoService.prototype, "associateUserToProject", null);
exports.ProjetoService = ProjetoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjetoService);
//# sourceMappingURL=projeto.service.js.map