import { AuthService } from "./auth.service";
import { ChangeRoleDTO, LoginDTO, RegisterDTO } from "./auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authPayload: LoginDTO, res: any): Promise<any>;
    register(authPayload: RegisterDTO): Promise<{
        nome: string;
        papel: string;
    }>;
    listUsers(): Promise<{
        idusuario: number;
        cpf: string;
        nome: string;
        email: string;
        papel: string;
    }[]>;
    changeRole(changeRolePayload: ChangeRoleDTO): Promise<{
        idusuario: number;
        nome: string;
        papel: string;
    }>;
}
