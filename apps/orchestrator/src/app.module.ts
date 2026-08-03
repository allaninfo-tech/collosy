import { Module } from '@nestjs/common';
import { PostActivity } from '@collosy/orchestrator/activities/post.activity';
import { getTemporalModule } from '@collosy/nestjs-libraries/temporal/temporal.module';
import { DatabaseModule } from '@collosy/nestjs-libraries/database/prisma/database.module';
import { AutopostService } from '@collosy/nestjs-libraries/database/prisma/autopost/autopost.service';
import { EmailActivity } from '@collosy/orchestrator/activities/email.activity';
import { IntegrationsActivity } from '@collosy/orchestrator/activities/integrations.activity';
import { HealthController } from '@collosy/orchestrator/health.controller';

const activities = [
  PostActivity,
  AutopostService,
  EmailActivity,
  IntegrationsActivity,
];
@Module({
  imports: [
    DatabaseModule,
    getTemporalModule(true, require.resolve('./workflows'), activities),
  ],
  controllers: [HealthController],
  providers: [...activities],
  get exports() {
    return [...this.providers, ...this.imports];
  },
})
export class AppModule {}
