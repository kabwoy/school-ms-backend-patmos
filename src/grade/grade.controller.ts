import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { Role } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/user/enums/roles.enum';
import { CreateGradeDto } from './dto/createGrade.dto';
import { UpdateGradeDto } from './dto/updateGrade.dto';
import { GradeService } from './grade.service';

@Controller('grades')
@UseGuards(JwtGuard)
export class GradeController {
  constructor(private gradeService: GradeService) {}
  @Get()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findAll() {
    return this.gradeService.findAll();
  }
  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  create(@Body() body: CreateGradeDto) {

    return this.gradeService.create(body);
  }
  @Get(':id')
  @UseGuards(RolesGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gradeService.findOne(id);
  }
  @Patch(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateGradeDto) {
    return this.gradeService.update(id, body);
  }
  @Delete(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.gradeService.delete(id);
  }
}
