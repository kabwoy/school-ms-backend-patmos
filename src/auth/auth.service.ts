import { Injectable , UnauthorizedException  , BadRequestException} from '@nestjs/common';
import { ParentService } from 'src/parent/parent.service';
import {JwtService} from '@nestjs/jwt'
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { first } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private parentService:ParentService , private jwtService:JwtService , private userRepo:UserService){}

    async login(body:AuthDto){

        const user = await this.parentService.findbyIdNo(body.password)
        if(!user) throw new BadRequestException('No user Found')
        if(body.username !== user.contact) throw new BadRequestException('invalid username')
        if(body.password !== user.id_number) throw new BadRequestException('Invalid Password')
        return {token:this.jwtService.sign({id:user.id , id_number:user.id_number , first_name:user.first_name}) , first_name:user.first_name , id:user.id}
        
    }

    async signin(body:CreateUserDto){
        const user = await this.userRepo.findOneByEmail(body.email)
        if(!user) throw new BadRequestException("invalid email!! please check your email or contact the admin")
        const matchedPassword = await bcrypt.compare(body.password , user.password)
        if(!matchedPassword) throw new BadRequestException("wrong password , Please try again")
        // if(body.password !== user.password) throw new BadRequestException("invalid Password!! please check your password or contact the admin")
        return {token: this.jwtService.sign({user_id:user.id , role:user.role , email:user.email}), role:user.role}
        
        
    }
}
