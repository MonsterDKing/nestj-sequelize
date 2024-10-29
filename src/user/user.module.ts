import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './repository/user.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService,...userProviders],
})
export class UserModule {}
