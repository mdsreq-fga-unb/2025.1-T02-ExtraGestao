export class LoginDTO{
    NOME_USUARIO: string;
    SENHA: string;
}

export class RegisterDTO{
    NOME_USUARIO: string;
    SENHA: string;
    FUNCAO: string;
}

export class JwtPayload{
    sub: number;
    username: string;
    role: string;
}