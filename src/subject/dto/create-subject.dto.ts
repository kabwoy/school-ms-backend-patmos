import { IsEnum, IsNumber, IsString } from "class-validator";
import { Grade } from "src/grade/entity/grade.entity";
import { Status } from "../enums/status.enum";

export class CreateSubjectDto {
    @IsString()
    subject_name:string
    @IsNumber()
    grade:Grade
    @IsEnum(Status)
    status:Status
}
