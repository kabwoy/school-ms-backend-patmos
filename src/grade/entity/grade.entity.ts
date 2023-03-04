import { IsString } from "class-validator";
import { Classes } from "src/classes/entities/class.entity";
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
    @OneToMany(type=>Subject , (subject)=>subject.grade , {onDelete:'CASCADE' , onUpdate:'CASCADE'})
    subject:Subject
    @OneToMany(type=>Classes , (class_name)=>class_name.grade)
    class_name:Classes
    

}