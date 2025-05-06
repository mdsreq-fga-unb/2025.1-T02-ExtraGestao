import {Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {PrismaService} from "../prisma/prisma.service";
import {LoginDTO, RegisterDTO} from "./auth.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor (
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService
    ) {}

    async validateUser(authPayload: LoginDTO): Promise<any> {
        const user = await this.prisma.usuario.findUnique({
            where: { NOME_USUARIO: authPayload.NOME_USUARIO }
        });

        if (user && await bcrypt.compare(authPayload.SENHA, user.SENHA)) {
            return user;
        }

        return null;
    }

    async login(authPayload: LoginDTO) {
        const user = await this.validateUser(authPayload);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { username: user.NOME_USUARIO, sub: user.IDUSUARIO, role: user.FUNCAO };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(registerPayload: RegisterDTO) {
        const hashedPassword = await bcrypt.hash(registerPayload.SENHA, 10);

        return this.prisma.usuario.create({
            data: {
                NOME_USUARIO: registerPayload.NOME_USUARIO,
                SENHA: hashedPassword,
                FUNCAO: registerPayload.FUNCAO
            },
            select:{
                NOME_USUARIO: true,
                FUNCAO: true
            }
        })
    }
}
