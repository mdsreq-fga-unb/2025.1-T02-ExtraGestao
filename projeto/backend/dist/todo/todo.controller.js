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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const jwt_guard_1 = require("../auth/jwt.guard");
const todo_dto_1 = require("./todo.dto");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async create(todoPayload) {
        return await this.todoService.create(todoPayload);
    }
    async update(todoPayload) {
        return await this.todoService.update(todoPayload);
    }
    async destroy(id) {
        return await this.todoService.destroy(id);
    }
    async list() {
        return this.todoService.list();
    }
    async retrieve(id) {
        return await this.todoService.retrieve(id);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.CreateTodoDTO]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.UpdateTodoDTO]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardAdmin),
    (0, common_1.Delete)('destroy/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "destroy", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "list", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuardUser),
    (0, common_1.Get)('retrieve/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "retrieve", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map