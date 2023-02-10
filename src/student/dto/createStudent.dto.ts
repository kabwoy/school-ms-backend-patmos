import { IsDate, IsDateString, IsNumber, IsString } from "class-validator"
import { Grade } from "src/grade/entity/grade.entity"
import { Parent } from "src/parent/entity/parent.entity"

export class CreateStudentDto{
    @IsString()
    first_name:string
    @IsString()
    last_name:string
    @IsDateString()
    dob:Date
    fee_amount?:number
    @IsNumber()
    grade:Grade
    @IsNumber()
    parent:Parent
    @IsString()
    class_name:string
}