import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
import { LoginDTO, RegisterDTO } from "./auth.dto";
import * as bcrypt from 'bcrypt';

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
        })
    }
}
