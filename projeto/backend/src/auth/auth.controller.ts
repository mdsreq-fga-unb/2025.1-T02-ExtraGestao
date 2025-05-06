import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDTO, RegisterDTO} from "./auth.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    login(@Body() authPayload: LoginDTO) {
        return this.authService.login(authPayload);
    }

    @Post('register')
    register(@Body() authPayload: RegisterDTO) {
        return this.authService.register(authPayload);
    }
}
