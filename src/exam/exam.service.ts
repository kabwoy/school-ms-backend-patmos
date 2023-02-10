import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamService {
  constructor(@InjectRepository(Exam) private examRepo:Repository<Exam>){}
  create(createExamDto: CreateExamDto) {
    return this.examRepo.save(createExamDto);
  }

  findAll() {
    return this.examRepo.find();
  }

  findOne(id: number) {
    return this.examRepo.findOne({where:{id}});
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return this.examRepo.update(id , updateExamDto);
  }

  remove(id: number) {
    return this.examRepo.delete(id);
  }
}
