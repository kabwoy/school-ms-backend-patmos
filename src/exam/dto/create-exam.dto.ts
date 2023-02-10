import { IsString } from "class-validator";

export class CreateExamDto {
    @IsString()
    type:string
}
