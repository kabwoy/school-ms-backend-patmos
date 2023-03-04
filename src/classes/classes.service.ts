import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Classes } from './entities/class.entity';

@Injectable()
export class ClassesService {
  constructor(@InjectRepository(Classes) private classRepo:Repository<Classes>){}
  create(createClassDto: CreateClassDto) {
    return this.classRepo.save(createClassDto);
  }

  findAll() {
    return this.classRepo.find({relations:['student' , 'grade']});
  }

  findOne(id: number) {
    return this.classRepo.findOne({where:{id}});
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return this.classRepo.update(id , updateClassDto);
  }

  remove(id: number) {
    return this.classRepo.delete(id);
  }
}
