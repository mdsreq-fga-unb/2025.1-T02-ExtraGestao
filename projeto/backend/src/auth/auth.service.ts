import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
import { ChangeRoleDTO, LoginDTO, RegisterDTO } from "./auth.dto";
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService
    ) { }

    async validateUser(authPayload: LoginDTO): Promise<any> {
        const user = await this.prisma.usuario.findUnique({
            where: { email: authPayload.email },
        });

        if (user && await bcrypt.compare(authPayload.senha, user.hash_senha)) {
            return user;
        }

        return null;
    }

    async login(authPayload: LoginDTO) {
        const user = await this.validateUser(authPayload);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = {
            sub: user.idusuario,
            username: user.nome,
            role: user.papel,
        }

        return {
            access_token: this.jwtService.sign(payload),
            username: user.nome,
            role: user.papel,
            sub: user.idusuario,
        }
    }

    async register(registerPayload: RegisterDTO) {
        const hashedPassword = await bcrypt.hash(registerPayload.senha, 10);

        if (registerPayload.papel !== 'gestor' && registerPayload.papel !== 'usuario' && registerPayload.papel !== 'usuario/gestor') {
            throw new UnauthorizedException('Invalid role');
        }
        let usuario_tipo = 0;
        if (registerPayload.papel === 'gestor') {
            usuario_tipo = 1;
        } else if (registerPayload.papel === 'usuario') {
            usuario_tipo = 2;
        }
        else {
            usuario_tipo = 0;
        }

        try {
            return await this.prisma.usuario.create({
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
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002"
            ) {
                const target = error.meta?.target;
                if (Array.isArray(target)) {
                    if (target.includes("cpf")) {
                        throw new BadRequestException("Já existe um usuário com este CPF.");
                    }
                    if (target.includes("email")) {
                        throw new BadRequestException("Já existe um usuário com este e-mail.");
                    }
                } else if (typeof target === "string") {
                    if (target.includes("cpf")) {
                        throw new BadRequestException("Já existe um usuário com este CPF.");
                    }
                    if (target.includes("email")) {
                        throw new BadRequestException("Já existe um usuário com este e-mail.");
                    }
                }
                throw new BadRequestException("Erro ao cadastrar usuário.");
            }
            throw error;
        }
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

    async changeRole(changeRolePayload: ChangeRoleDTO) {
        const user = await this.prisma.usuario.findUnique({
            where: { idusuario: changeRolePayload.idusuario },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        if (changeRolePayload.role !== 'gestor' && changeRolePayload.role !== 'usuario' && changeRolePayload.role !== 'usuario/gestor') {
            throw new UnauthorizedException('Invalid role');
        }

        return this.prisma.usuario.update({
            where: { idusuario: changeRolePayload.idusuario },
            data: { papel: changeRolePayload.role },
            select: {
                idusuario: true,
                nome: true,
                papel: true
            }
        });
    }
}
