import { Student } from 'src/student/entity/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:false})
  first_name: string;
  @Column({nullable:false})
  last_name: string;
  @Column({nullable:false})
  contact: string;
  @Column({ unique: true })
  id_number: string;
  @Column({nullable:false})
  address: string;
  @OneToMany(type=>Student , (student)=>student.parent)
  student:Student
}
