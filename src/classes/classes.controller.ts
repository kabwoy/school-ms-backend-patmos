import { Controller, Get, Post, Body, Patch, Param, Delete , UseGuards } from '@nestjs/common';
import { Role } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/user/enums/roles.enum';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@UseGuards(JwtGuard)
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  create(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findAll() {
    return this.classesService.findAll();
  }

  @Get(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findOne(@Param('id') id: string) {
    return this.classesService.findOne(+id);
  }

  @Patch(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(+id, updateClassDto);
  }

  @Delete(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.classesService.remove(+id);
  }
}
