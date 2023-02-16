import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/user/enums/roles.enum';
import { CreateStudentDto } from './dto/createStudent.dto';
import { UpdateStudentDto } from './dto/updateStudent.dto';
import { StudentService } from './student.service';

@Controller('students')
@UseGuards(JwtGuard)
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.studentService.findAll();
  }
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() body:CreateStudentDto) {
    
    return this.studentService.create(body);
  }
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.findOne(id);
  }
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateStudentDto,
  ) {
    return this.studentService.update(id, body);
  }
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.delete(id);
  }
}
