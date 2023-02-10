import { CreateParentDto } from "./createParent.dto";
import {IsString} from 'class-validator'


export class UpdateParentDto{
    @IsString()
    first_name?: string;
  
    @IsString()
    last_name?: string;
  
    @IsString()
    contact?: string;
  
    @IsString()
    id_number?: string;
    
    @IsString()
    address:string
}