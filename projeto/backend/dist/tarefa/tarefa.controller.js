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
exports.TarefaController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/jwt.guard");
const tarefa_dto_1 = require("./tarefa.dto");
const tarefa_service_1 = require("./tarefa.service");
let TarefaController = class TarefaController {
    constructor(tarefaService) {
        this.tarefaService = tarefaService;
    }
    async createTarefa(createTarefaDto) {
        return this.tarefaService.create(createTarefaDto);
    }
    async updateTarefa(id, updateTarefaDto) {
        return this.tarefaService.update(id, updateTarefaDto);
    }
    async deleteTarefa(id) {
        return this.tarefaService.delete(id);
    }
    async listTarefas() {
        return this.tarefaService.findAll();
    }
    async getTarefaById(id) {
        return this.tarefaService.findById(id);
    }
    async addResponsavel(id, responsavelId) {
        return this.tarefaService.addResponsavel(id, responsavelId);
    }
};
exports.TarefaController = TarefaController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarefa_dto_1.CreateTarefaDTO]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "createTarefa", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tarefa_dto_1.UpdateTarefaDTO]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "updateTarefa", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "deleteTarefa", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "listTarefas", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "getTarefaById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Post)('addResponsavel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('responsavelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "addResponsavel", null);
exports.TarefaController = TarefaController = __decorate([
    (0, common_1.Controller)('tarefa'),
    __metadata("design:paramtypes", [tarefa_service_1.TarefaService])
], TarefaController);
//# sourceMappingURL=tarefa.controller.js.map