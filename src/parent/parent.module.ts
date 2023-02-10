import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { Parent } from './entity/parent.entity';
import { ParentController } from './parent.controller';
import { ParentService } from './parent.service';

@Module({
  imports:[TypeOrmModule.forFeature([Parent])],
  controllers: [ParentController],
  providers: [ParentService],
  exports:[ParentService]
})
export class ParentModule {}
