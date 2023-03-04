import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/createStudent.dto';
import { UpdateStudentDto } from './dto/updateStudent.dto';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}
  async findAll() {
     return await this.studentRepo.find({relations:['grade' , 'parent' , 'class_name']}); 
  }
  filterStudents(id:number){
     return this.studentRepo.query(`SELECT * FROM student WHERE gradeId=${id}`)

  }
  create(studentBody: CreateStudentDto) {
    return this.studentRepo.save(studentBody);
  }
  findOne(id: number) {
    return this.studentRepo.findOne({ where: { id } , relations:['grade' , 'parent' ,'class_name']});
  }
  update(id: number, studentBody: UpdateStudentDto) {
    return this.studentRepo.update(id, studentBody);
  }
  delete(id: number) {
    return this.studentRepo.delete(id);
  }
}
