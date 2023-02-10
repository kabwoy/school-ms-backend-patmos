import { PartialType } from "@nestjs/mapped-types";
import { CreateGradeDto } from "./createGrade.dto";

export class UpdateGradeDto extends PartialType(CreateGradeDto){}