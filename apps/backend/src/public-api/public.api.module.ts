import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from '@collosy/backend/services/auth/auth.service';
import { StripeService } from '@collosy/nestjs-libraries/services/stripe.service';
import { PoliciesGuard } from '@collosy/backend/services/auth/permissions/permissions.guard';
import { PermissionsService } from '@collosy/backend/services/auth/permissions/permissions.service';
import { IntegrationManager } from '@collosy/nestjs-libraries/integrations/integration.manager';
import { UploadModule } from '@collosy/nestjs-libraries/upload/upload.module';
import { OpenaiService } from '@collosy/nestjs-libraries/openai/openai.service';
import { ExtractContentService } from '@collosy/nestjs-libraries/openai/extract.content.service';
import { CodesService } from '@collosy/nestjs-libraries/services/codes.service';
import { PublicIntegrationsController } from '@collosy/backend/public-api/routes/v1/public.integrations.controller';
import { PublicAuthMiddleware } from '@collosy/backend/services/auth/public.auth.middleware';

const authenticatedController = [PublicIntegrationsController];
@Module({
  imports: [UploadModule],
  controllers: [...authenticatedController],
  providers: [
    AuthService,
    StripeService,
    OpenaiService,
    ExtractContentService,
    PoliciesGuard,
    PermissionsService,
    CodesService,
    IntegrationManager,
  ],
  get exports() {
    return [...this.imports, ...this.providers];
  },
})
export class PublicApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PublicAuthMiddleware).forRoutes(...authenticatedController);
  }
}

