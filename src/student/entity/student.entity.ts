import { ExamEntry } from 'src/examentry/entities/examentry.entity';
import { Grade } from 'src/grade/entity/grade.entity';
import { Parent } from 'src/parent/entity/parent.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  dob: Date;
  @Column()
  class_name: string;
  @Column({default:15000})
  fee_amount:number;
  @ManyToOne((type) => Grade, (grade) => grade.student  , {onDelete:'CASCADE'})
  grade: Grade;
  @ManyToOne((type) => Parent, (parent) => parent.student , {onDelete:'CASCADE'})
  parent: Parent;
  @OneToMany(type=>ExamEntry , (exams)=>exams.student)
  exams:ExamEntry
}
