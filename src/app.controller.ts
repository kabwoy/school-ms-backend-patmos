import { Controller, Get , UseGuards , Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthR } from './auth/custom-guard.guard';
import { JwtGuard } from './auth/jwt-auth.guard';


@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UseGuards(JwtGuard)
  // @UseGuards(AuthR)
  @Get()
  getHello(@Request() req){
    return req.user;
  }
}
