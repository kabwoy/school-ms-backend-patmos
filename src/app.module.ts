import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ParentModule } from './parent/parent.module';
import { GradeModule } from './grade/grade.module';
import { Parent } from './parent/entity/parent.entity';
import { Grade } from './grade/entity/grade.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/entity/student.entity';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { SubjectModule } from './subject/subject.module';
import { Subject } from './subject/entities/subject.entity';
import { ExamModule } from './exam/exam.module';
import { Exam } from './exam/entities/exam.entity';
import { ExamentryModule } from './examentry/examentry.module';
import { ExamEntry } from './examentry/entities/examentry.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/jwt-auth.guard';
import { TeacherModule } from './teacher/teacher.module';
import { Teacher } from './teacher/entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    username:'root',
    port:3306,
    password:'',
    host:"localhost",
    database:'patmos',
    entities:[Parent , Grade , Student , Subject , Exam , ExamEntry , User , Teacher],
    autoLoadEntities:true,
    synchronize:true
  }), ParentModule, GradeModule, StudentModule, AuthModule, SubjectModule, ExamModule, ExamentryModule, UserModule, TeacherModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
