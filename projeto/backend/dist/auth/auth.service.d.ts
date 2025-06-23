import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
import { LoginDTO, RegisterDTO } from "./auth.dto";
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    validateUser(authPayload: LoginDTO): Promise<any>;
    login(authPayload: LoginDTO): Promise<{
        access_token: string;
        username: any;
        role: any;
        sub: any;
    }>;
    register(registerPayload: RegisterDTO): Promise<{
        nome: string;
        papel: string;
    }>;
}
