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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async validateUser(authPayload) {
        const user = await this.prisma.usuario.findUnique({
            where: { email: authPayload.email },
        });
        if (user && await bcrypt.compare(authPayload.senha, user.hash_senha)) {
            return user;
        }
        return null;
    }
    async login(authPayload) {
        const user = await this.validateUser(authPayload);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = {
            sub: user.idusuario,
            username: user.nome,
            role: user.papel,
        };
        return {
            access_token: this.jwtService.sign(payload),
            username: user.nome,
            role: user.papel,
            sub: user.idusuario,
        };
    }
    async register(registerPayload) {
        const hashedPassword = await bcrypt.hash(registerPayload.senha, 10);
        if (registerPayload.papel !== 'gestor' && registerPayload.papel !== 'usuario' && registerPayload.papel !== 'usuario/gestor') {
            throw new common_1.UnauthorizedException('Invalid role');
        }
        let usuario_tipo = 0;
        if (registerPayload.papel === 'gestor') {
            usuario_tipo = 1;
        }
        else if (registerPayload.papel === 'usuario') {
            usuario_tipo = 2;
        }
        else {
            usuario_tipo = 0;
        }
        return this.prisma.usuario.create({
            data: {
                nome: registerPayload.nome,
                hash_senha: hashedPassword,
                papel: registerPayload.papel,
                cpf: registerPayload.cpf,
                email: registerPayload.email,
                usuario_tipo: usuario_tipo
            },
            select: {
                nome: true,
                papel: true
            }
        });
    }
    async listUsers() {
        return this.prisma.usuario.findMany({
            select: {
                idusuario: true,
                nome: true,
                papel: true,
                email: true,
                cpf: true
            }
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map