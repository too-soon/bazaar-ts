import { CommandFactory } from 'nest-commander';
import { CommandModule } from './command.module';

async function bootstrap() {
  await CommandFactory.run(CommandModule, ['warn', 'error', 'log']);
}

bootstrap().catch((error) => {
  console.error('Error occurred while bootstrapping:', error);
  process.exit(1);
});
