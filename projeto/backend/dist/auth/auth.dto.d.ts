export declare class RegisterDTO {
    cpf: string;
    nome: string;
    email: string;
    senha: string;
    papel: string;
}
export declare class LoginDTO {
    email: string;
    senha: string;
}
export declare class JwtPayload {
    sub: number;
    username: string;
    role: string;
}
