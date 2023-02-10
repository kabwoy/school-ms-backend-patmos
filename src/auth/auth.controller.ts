import { Body, Controller , Get , Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';


@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('login')

    login(@Body() body:AuthDto){

        return this.authService.login(body)
    }

    @Post('signin')

    signin(@Body() body:CreateUserDto){

        return this.authService.signin(body)
    }
    
}
