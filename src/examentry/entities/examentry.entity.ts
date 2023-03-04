import { Exam } from "src/exam/entities/exam.entity";
import { Student } from "src/student/entity/student.entity";
import { Subject } from "src/subject/entities/subject.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class ExamEntry {
    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(type=>Subject , (subject)=>subject.exams ,  {onDelete:'CASCADE'})
    subject:Subject
    @ManyToOne(type=>Student , (student)=>student.exams , {onDelete:'CASCADE'})
    student:Student
    @ManyToOne(type=>Exam , (exam)=>exam.exams)
    exam:Exam
    @Column()
    score:number
    @CreateDateColumn()
    created_at:Date;
    @UpdateDateColumn()
    updated_at:Date;

}
