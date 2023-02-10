import { PartialType } from '@nestjs/mapped-types';
import { CreateExamentryDto } from './create-examentry.dto';

export class UpdateExamentryDto extends PartialType(CreateExamentryDto) {}
