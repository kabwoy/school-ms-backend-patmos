import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "../enums/roles.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    email:string;
    @Column()
    password:string;
    @Column({type:'enum' , enum:Roles ,  default:Roles.USER})
    role:Roles
}
