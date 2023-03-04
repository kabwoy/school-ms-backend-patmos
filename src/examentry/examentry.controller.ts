import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamentryService } from './examentry.service';
import { CreateExamentryDto } from './dto/create-examentry.dto';
import { UpdateExamentryDto } from './dto/update-examentry.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/user/enums/roles.enum';
import { Role } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('exam-entry')
@UseGuards(JwtGuard)
export class ExamentryController {
  constructor(private readonly examentryService: ExamentryService) {}

  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  create(@Body() createExamentryDto: CreateExamentryDto) {
    console.log(createExamentryDto);
    
    return this.examentryService.create(createExamentryDto);
  }

  @Get()
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findAll() {
    return this.examentryService.findAll();
  }

  @Get(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  findOne(@Param('id') id: string) {
    return this.examentryService.findOne(+id);
  }

  @Patch(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() updateExamentryDto: UpdateExamentryDto) {
    return this.examentryService.update(+id, updateExamentryDto);
  }

  @Delete(':id')
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.examentryService.remove(+id);
  }
}
