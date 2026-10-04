import { Injectable } from '@nestjs/common';
import { Role } from 'database/entity/user.entity';
import { UserService } from 'domain/user/user.service';
import { Command, CommandRunner } from 'nest-commander';

@Injectable()
@Command({
  name: 'assign-dev-role',
  description: 'Assign the developer role to a user by email',
  arguments: '<email>',
})
export class AssignDevRoleCommand extends CommandRunner {
  constructor(private readonly userService: UserService) {
    super();
  }

  async run(passedParams: string[]): Promise<void> {
    const email = passedParams[0];

    if (!email) {
      console.error('Error: email argument is required.');
      process.exitCode = 2;
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Error: invalid email format.');
      process.exitCode = 2;
      return;
    }

    await this.userService.assignRoleByEmail(email, Role.DEVELOPER);

    console.log(`Assigned role "developer" to user with email: ${email}`);
  }
}
