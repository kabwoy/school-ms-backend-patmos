import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(@InjectRepository(Subject) private subjectRepo:Repository<Subject>){}
  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectRepo.save(createSubjectDto);
  }

  findAll() {
    return this.subjectRepo.find();
  }

  findOne(id: number) {
    return this.subjectRepo.findOne({where:{id} , relations:['grade']}) ;
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectRepo.update(id , updateSubjectDto);
  }

  remove(id: number) {
    return this.subjectRepo.delete(id);
  }
}
