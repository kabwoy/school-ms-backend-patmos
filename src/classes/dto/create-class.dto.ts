import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Grade } from "src/grade/entity/grade.entity";

export class CreateClassDto {
    @IsString()
    @IsNotEmpty()
    class_name:string
    @IsNumber()
    grade:Grade
}
