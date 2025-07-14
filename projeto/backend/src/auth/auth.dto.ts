export class RegisterDTO {
    cpf: string;
    nome: string;
    email: string;
    senha: string;
    papel: string;
}

export class LoginDTO {
    email: string;
    senha: string;
}

export class JwtPayload {
    sub: number;
    username: string;
    role: string;
}

export class ChangeRoleDTO {
    idusuario: number;
    role: string;
}
