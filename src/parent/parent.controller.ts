import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
  UseGuards,
  Request
} from '@nestjs/common';
import { Role } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/user/enums/roles.enum';
import { CreateParentDto } from './dtos/createParent.dto';
import { UpdateParentDto } from './dtos/updateParent.dto';
import { ParentService } from './parent.service';

@Controller('parents')
@UseGuards(JwtGuard)
export class ParentController {
  constructor(private parentService: ParentService) {}

  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Get('')
  findAll() {
    return this.parentService.findAll();
  }

  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() body: CreateParentDto) {
    return this.parentService.create(body);
  }

  @Get('profile')
  fetchProfile(@Request() req){
    return this.parentService.findAllForProfile(req.user.id)
  }
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.parentService.findOne(id);
  }

 
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateParentDto) {
    return this.parentService.update(id, body);
  }
  @Role(Roles.ADMIN)
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.parentService.delete(id);
  }

}
