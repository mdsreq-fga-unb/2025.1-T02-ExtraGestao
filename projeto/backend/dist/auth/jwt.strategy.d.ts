import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './auth.dto';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): Promise<{
        userId: number;
        username: string;
        role: string;
    }>;
}
export {};
