import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ExamService } from './exam.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { Role } from 'src/auth/decorators/roles.decorator';
import { Roles } from 'src/user/enums/roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('exams')
@UseGuards(JwtGuard)
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  create(@Body() createExamDto: CreateExamDto) {
    return this.examService.create(createExamDto);
  }

  @Get()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findAll() {
    return this.examService.findAll();
  }

  @Get(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findOne(@Param('id') id: string) {
    return this.examService.findOne(+id);
  }

  @Patch(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examService.update(+id, updateExamDto);
  }

  @Delete(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.examService.remove(+id);
  }
}
