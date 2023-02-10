import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/user/enums/roles.enum';
import { Role } from 'src/auth/decorators/roles.decorator';

@Controller('subjects')
@UseGuards(JwtGuard)
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @Get()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findAll() {
    return this.subjectService.findAll();
  }

  @Get(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne(+id);
  }

  @Patch(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.subjectService.remove(+id);
  }
}
