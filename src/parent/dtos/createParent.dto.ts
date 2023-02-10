import { IsNotEmpty, IsString  } from 'class-validator';

export class CreateParentDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsString()
  @IsNotEmpty()
  id_number: string;

  @IsString()
  @IsNotEmpty()
  address:string
}
