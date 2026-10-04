import { Module } from '@nestjs/common';
import { UserModule } from 'domain/user/user.module';
import { AssignDevRoleCommand } from './assign-dev-role.command';
import { DatabaseModule } from 'database/database.provider';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [AssignDevRoleCommand],
})
export class CommandModule {}
