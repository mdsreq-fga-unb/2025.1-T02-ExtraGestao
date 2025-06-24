import { ExecutionContext } from '@nestjs/common';
declare const JwtAuthGuardUser_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuardUser extends JwtAuthGuardUser_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
    handleRequest(err: any, user: any, info: any): any;
}
declare const JwtAuthGuardAdmin_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuardAdmin extends JwtAuthGuardAdmin_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
