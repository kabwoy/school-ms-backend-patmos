import { IsString } from "class-validator";
import { Student } from "src/student/entity/student.entity";
import { Subject } from "src/subject/entities/subject.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grade{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    grade_name:string
    @OneToMany(type=>Student , (student)=> student.grade)
    student:Student
    @OneToMany(type=>Subject , (subject)=>subject.grade)
    subject:Subject
    

}