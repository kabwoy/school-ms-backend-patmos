import { Module } from '@nestjs/common';
import { ParentModule } from 'src/parent/parent.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[ParentModule , JwtModule.register({
    secret:"kabwoy"
  }) , PassportModule , UserModule],
  providers: [AuthService , JwtStrategy],
  controllers: [AuthController],
  exports:[AuthService]

})
export class AuthModule {}
