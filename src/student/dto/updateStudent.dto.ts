import { CreateStudentDto } from "./createStudent.dto";
import {PartialType} from '@nestjs/mapped-types'

export class UpdateStudentDto extends PartialType(CreateStudentDto){}