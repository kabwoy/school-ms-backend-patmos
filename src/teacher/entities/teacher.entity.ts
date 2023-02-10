import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    first_name:string;
    @Column()
    last_name:string;
    @Column()
    contact:string;
}
