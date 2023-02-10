import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/entity/student.entity';
import { Repository } from 'typeorm';
import { CreateExamentryDto } from './dto/create-examentry.dto';
import { UpdateExamentryDto } from './dto/update-examentry.dto';
import { ExamEntry } from './entities/examentry.entity';

@Injectable()
export class ExamentryService {
  constructor(
    @InjectRepository(ExamEntry) private examEntryRepo: Repository<ExamEntry>,
  ) {}
  create(createExamentryDto: CreateExamentryDto) {
    return this.examEntryRepo.save(createExamentryDto);
  }

  findAll() {
    return this.examEntryRepo.find({relations:['student' , 'subject']});
  }

  findOne(id: number) {
    return this.examEntryRepo.findOne({ where: { id } });
  }

  update(id: number, updateExamentryDto: UpdateExamentryDto) {
    return this.examEntryRepo.update(id, updateExamentryDto);
  }

  remove(id: number) {
    return this.examEntryRepo.delete(id);
  }
}
