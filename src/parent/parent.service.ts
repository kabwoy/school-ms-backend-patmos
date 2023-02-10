import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParentDto } from './dtos/createParent.dto';
import { UpdateParentDto } from './dtos/updateParent.dto';
import { Parent } from './entity/parent.entity';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private parentRepo: Repository<Parent>,
  ) {}
  findAll() {
    return this.parentRepo.find({relations:['student']});
  }

  create(CreateParentDto: CreateParentDto) {
    return this.parentRepo.save(CreateParentDto)
  }

  findOne(id: number) {
    return this.parentRepo.findOne({where:{id}})
  }

  update(id: number, updateBody: UpdateParentDto) {
    return this.parentRepo.update(id , updateBody)
  }

  delete(id: number) {
    return this.parentRepo.delete(id)
  }

  findbyIdNo(id:string){
    return this.parentRepo.findOne({where:{id_number:id} , relations:['student']})
  }

  findAllForProfile(id:number){

    return this.parentRepo.find({where:{id} , relations:['student']})
  }
}
