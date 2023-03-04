import { ExamEntry } from "src/examentry/entities/examentry.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    type:string
    @OneToMany(type=>ExamEntry , (exams)=>exams.exam  , {onDelete:'CASCADE'})
    exams:ExamEntry
}
