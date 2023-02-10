import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentModule } from 'src/parent/parent.module';
import { Grade } from './entity/grade.entity';
import { GradeController } from './grade.controller';
import { GradeService } from './grade.service';

@Module({
  imports:[TypeOrmModule.forFeature([Grade]) , ParentModule],
  controllers: [GradeController],
  providers: [GradeService]
})
export class GradeModule {}
