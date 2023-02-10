import { IsNumber } from "class-validator";
import { Exam } from "src/exam/entities/exam.entity";
import { Student } from "src/student/entity/student.entity";
import { Subject } from "src/subject/entities/subject.entity";

export class CreateExamentryDto {
    @IsNumber()
    subject:Subject
    @IsNumber()
    student:Student
    @IsNumber()
    exam:Exam
    @IsNumber()
    score:number
}
