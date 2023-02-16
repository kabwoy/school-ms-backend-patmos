import { Injectable } from '@nestjs/common';
import { ParentService } from 'src/parent/parent.service';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class ProfileService {

    constructor(private parentService:ParentService , private studentService:StudentService){}

    fetchProfile(id:number){

        return this.parentService.findOne(id)
    }

    getStudent(id:number){

        return this.studentService.findOne(id)


    }


}
