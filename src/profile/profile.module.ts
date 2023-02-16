import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { ParentModule } from 'src/parent/parent.module';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports:[ParentModule , StudentModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
