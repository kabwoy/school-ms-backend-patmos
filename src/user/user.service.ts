import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ForbiddenException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.findOne({
      where: { email: createUserDto.email },
    });
    if (user) throw new ForbiddenException('email already exists!!');
    const hashedPassword = await bcrypt.hash(createUserDto.password , 12)
    return this.userRepo.save({email:createUserDto.email , password:hashedPassword});
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }       

  findOneByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
