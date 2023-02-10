import { ExamEntry } from "src/examentry/entities/examentry.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    type:string
    @OneToMany(type=>ExamEntry , (exams)=>exams.exam)
    exams:ExamEntry
}
