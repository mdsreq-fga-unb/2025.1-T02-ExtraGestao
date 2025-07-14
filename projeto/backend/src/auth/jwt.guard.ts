import { Injectable, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuardUser extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
        return super.canActivate(context) as Promise<boolean>;
    }

    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
            throw new UnauthorizedException(info || 'Autenticação falhou');
        }
        return user;
    }
}

@Injectable()
export class JwtAuthGuardAdmin extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
        return super.canActivate(context) as Promise<boolean>;
    }

    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
            throw new UnauthorizedException(info || 'Autenticação falhou');
        }
        if (user.role !== 'gestor' && user.role !== 'usuario/gestor') {
            throw new ForbiddenException('Acesso negado');
        }
        return user;
    }
}
