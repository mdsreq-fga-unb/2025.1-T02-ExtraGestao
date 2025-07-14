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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetoController = void 0;
const common_1 = require("@nestjs/common");
const projeto_service_1 = require("./projeto.service");
const projeto_dto_1 = require("./projeto.dto");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_guard_1 = require("../auth/jwt.guard");
let ProjetoController = class ProjetoController {
    constructor(projetoService) {
        this.projetoService = projetoService;
    }
    async createProjeto(body, foto) {
        return this.projetoService.create({
            ...body,
            valor: Number(body.valor),
            data_inicio: new Date(body.data_inicio),
            prazo: new Date(body.prazo),
            id_gestor: Number(body.id_gestor),
            foto: foto ? foto.buffer : undefined
        });
    }
    async updateProjeto(body, id, foto) {
        return this.projetoService.update(Number(id), {
            ...body,
            valor: Number(body.valor),
            data_inicio: new Date(body.data_inicio),
            prazo: new Date(body.prazo),
            id_gestor: Number(body.id_gestor),
            foto: foto ? foto.buffer : body.foto,
        });
    }
    deleteProjeto(id) {
        return this.projetoService.delete(Number(id));
    }
    async listProjetos() {
        const projetos = await this.projetoService.findAll();
        return projetos.map(p => ({
            ...p,
            foto: p.foto ? `data:image/png;base64,${Buffer.from(p.foto).toString('base64')}` : null
        }));
    }
    getProjetoById(id) {
        return this.projetoService.findById(Number(id));
    }
    associateProjeto(associateDto) {
        const { id_projeto, id_usuario } = associateDto;
        return this.projetoService.associateUserToProject(id_projeto, id_usuario);
    }
};
exports.ProjetoController = ProjetoController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('foto')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projeto_dto_1.CreateProjetoDTO, Object]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "createProjeto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Patch)('update/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('foto')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projeto_dto_1.CreateProjetoDTO, Number, Object]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "updateProjeto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjetoController.prototype, "deleteProjeto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "listProjetos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjetoController.prototype, "getProjetoById", null);
__decorate([
    (0, common_1.Post)('associate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projeto_dto_1.AssociateDTO]),
    __metadata("design:returntype", void 0)
], ProjetoController.prototype, "associateProjeto", null);
exports.ProjetoController = ProjetoController = __decorate([
    (0, common_1.Controller)('projeto'),
    __metadata("design:paramtypes", [projeto_service_1.ProjetoService])
], ProjetoController);
//# sourceMappingURL=projeto.controller.js.map