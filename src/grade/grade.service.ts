import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGradeDto } from './dto/createGrade.dto';
import { UpdateGradeDto } from './dto/updateGrade.dto';
import { Grade } from './entity/grade.entity';

@Injectable()
export class GradeService {
  constructor(@InjectRepository(Grade) private gradeRepo: Repository<Grade>) {}

  findAll() {
  
    return this.gradeRepo.find({relations:['subject']});
  }

  create(gradeBody: CreateGradeDto) {
    return this.gradeRepo.save(gradeBody);
  }

  findOne(id: number) {
    return this.gradeRepo.findOne({ where: { id } ,relations:['subject']});
  }

  update(id: number, gradeBody: UpdateGradeDto) {
    return this.gradeRepo.update(id, gradeBody);
  }

  delete(id: number) {
    return this.gradeRepo.delete(id);
  }
}
