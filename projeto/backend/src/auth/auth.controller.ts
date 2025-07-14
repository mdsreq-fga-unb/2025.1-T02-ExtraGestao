import { Body, Controller, Get, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { ChangeRoleDTO, LoginDTO, RegisterDTO } from "./auth.dto";
import { JwtAuthGuardAdmin, JwtAuthGuardUser } from './jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    async login(@Body() authPayload: LoginDTO, @Res() res) {
        const loginResult = await this.authService.login(authPayload);
        res.cookie('session-token', loginResult.access_token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 1000 * 60 * 60 * 24,
        });
        return res.json(loginResult);
    }


    @Post('register')
    register(@Body() authPayload: RegisterDTO) {
        return this.authService.register(authPayload);
    }

    @UseGuards(JwtAuthGuardUser)
    @Get('list')
    listUsers() {
        return this.authService.listUsers();
    }

    @UseGuards(JwtAuthGuardAdmin)
    @Patch('changeRole')
    changeRole(@Body() changeRolePayload: ChangeRoleDTO) {
        return this.authService.changeRole(changeRolePayload);
    }
}
