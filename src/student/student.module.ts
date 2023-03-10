import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports:[TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
  exports:[StudentService],
})
export class StudentModule {}
