import { AuthService } from "./auth.service";
import { LoginDTO, RegisterDTO } from "./auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authPayload: LoginDTO): Promise<{
        access_token: string;
        username: any;
        role: any;
        sub: any;
    }>;
    register(authPayload: RegisterDTO): Promise<{
        nome: string;
        papel: string;
    }>;
}
