import { Module } from '@nestjs/common';
import { ExamentryService } from './examentry.service';
import { ExamentryController } from './examentry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamEntry } from './entities/examentry.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ExamEntry])],
  controllers: [ExamentryController],
  providers: [ExamentryService]
})
export class ExamentryModule {}
