import { Controller , Get , Param , ParseIntPipe , UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { ProfileService } from './profile.service';

@Controller('profile')
@UseGuards(JwtGuard)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get(':id')

  fetchProfile(@Param('id' , ParseIntPipe) id:number){

    return this.profileService.fetchProfile(id)


  }
  @Get('student/:id')

  getStudent(@Param('id' , ParseIntPipe) id:number){

    return this.profileService.getStudent(id)



  }

}
