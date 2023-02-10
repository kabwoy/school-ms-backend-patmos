import { IsString } from "class-validator";

export class CreateGradeDto{

    @IsString()
    grade_name:string
}