import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { Classes } from './entities/class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Classes])],
  controllers: [ClassesController],
  providers: [ClassesService]
})
export class ClassesModule {}
