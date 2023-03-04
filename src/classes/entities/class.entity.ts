import { Grade } from "src/grade/entity/grade.entity";
import { Student } from "src/student/entity/student.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Classes {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    class_name:string
    @OneToMany((type)=>Student , (student)=>student.class_name)
    student:Student
    @ManyToOne(type=>Grade , (grade)=>grade.class_name)
    grade:Grade;

}
