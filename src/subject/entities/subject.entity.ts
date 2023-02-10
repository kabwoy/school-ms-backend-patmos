import { Exam } from "src/exam/entities/exam.entity";
import { ExamEntry } from "src/examentry/entities/examentry.entity";
import { Grade } from "src/grade/entity/grade.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { EnumType } from "typescript";
import { Status } from "../enums/status.enum";


@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    subject_name:string;
    @ManyToOne(type=>Grade , (grade)=>grade.subject)
    grade:Grade
    @Column({type:'enum' , enum:Status , default:Status.Mandatory})
    status:Status;
    @OneToMany(type=>ExamEntry , (exams)=>exams.subject)
    exams:ExamEntry
}
