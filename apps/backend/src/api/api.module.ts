import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from '@collosy/backend/api/routes/auth.controller';
import { AuthService } from '@collosy/backend/services/auth/auth.service';
import { UsersController } from '@collosy/backend/api/routes/users.controller';
import { AuthMiddleware } from '@collosy/backend/services/auth/auth.middleware';
import { StripeController } from '@collosy/backend/api/routes/stripe.controller';
import { StripeService } from '@collosy/nestjs-libraries/services/stripe.service';
import { AnalyticsController } from '@collosy/backend/api/routes/analytics.controller';
import { PoliciesGuard } from '@collosy/backend/services/auth/permissions/permissions.guard';
import { PermissionsService } from '@collosy/backend/services/auth/permissions/permissions.service';
import { IntegrationsController } from '@collosy/backend/api/routes/integrations.controller';
import { IntegrationManager } from '@collosy/nestjs-libraries/integrations/integration.manager';
import { SettingsController } from '@collosy/backend/api/routes/settings.controller';
import { PostsController } from '@collosy/backend/api/routes/posts.controller';
import { MediaController } from '@collosy/backend/api/routes/media.controller';
import { UploadModule } from '@collosy/nestjs-libraries/upload/upload.module';
import { BillingController } from '@collosy/backend/api/routes/billing.controller';
import { NotificationsController } from '@collosy/backend/api/routes/notifications.controller';
import { OpenaiService } from '@collosy/nestjs-libraries/openai/openai.service';
import { ExtractContentService } from '@collosy/nestjs-libraries/openai/extract.content.service';
import { CodesService } from '@collosy/nestjs-libraries/services/codes.service';
import { CopilotController } from '@collosy/backend/api/routes/copilot.controller';
import { PublicController } from '@collosy/backend/api/routes/public.controller';
import { RootController } from '@collosy/backend/api/routes/root.controller';
import { TrackService } from '@collosy/nestjs-libraries/track/track.service';
import { ShortLinkService } from '@collosy/nestjs-libraries/short-linking/short.link.service';
import { WebhookController } from '@collosy/backend/api/routes/webhooks.controller';
import { SignatureController } from '@collosy/backend/api/routes/signature.controller';
import { AutopostController } from '@collosy/backend/api/routes/autopost.controller';
import { SetsController } from '@collosy/backend/api/routes/sets.controller';
import { ThirdPartyController } from '@collosy/backend/api/routes/third-party.controller';
import { MonitorController } from '@collosy/backend/api/routes/monitor.controller';
import { NoAuthIntegrationsController } from '@collosy/backend/api/routes/no.auth.integrations.controller';
import { EnterpriseController } from '@collosy/backend/api/routes/enterprise.controller';
import { OAuthAppController } from '@collosy/backend/api/routes/oauth-app.controller';
import { ApprovedAppsController } from '@collosy/backend/api/routes/approved-apps.controller';
import { OAuthController, OAuthAuthorizedController } from '@collosy/backend/api/routes/oauth.controller';
import { AnnouncementsController } from '@collosy/backend/api/routes/announcements.controller';
import { AdminController } from '@collosy/backend/api/routes/admin.controller';
import { AuthProviderManager } from '@collosy/backend/services/auth/providers/providers.manager';
import { GithubProvider } from '@collosy/backend/services/auth/providers/github.provider';
import { GoogleProvider } from '@collosy/backend/services/auth/providers/google.provider';
import { OauthProvider } from '@collosy/backend/services/auth/providers/oauth.provider';

const authenticatedController = [
  UsersController,
  AnalyticsController,
  IntegrationsController,
  SettingsController,
  PostsController,
  MediaController,
  BillingController,
  NotificationsController,
  CopilotController,
  WebhookController,
  SignatureController,
  AutopostController,
  SetsController,
  ThirdPartyController,
  OAuthAppController,
  ApprovedAppsController,
  OAuthAuthorizedController,
  AnnouncementsController,
  AdminController,
];
@Module({
  imports: [UploadModule],
  controllers: [
    RootController,
    StripeController,
    AuthController,
    PublicController,
    MonitorController,
    EnterpriseController,
    NoAuthIntegrationsController,
    OAuthController,
    ...authenticatedController,
  ],
  providers: [
    AuthService,
    StripeService,
    OpenaiService,
    ExtractContentService,
    AuthMiddleware,
    PoliciesGuard,
    PermissionsService,
    CodesService,
    IntegrationManager,
    TrackService,
    ShortLinkService,
    AuthProviderManager,
    GithubProvider,
    GoogleProvider,
    OauthProvider,
  ],
  get exports() {
    return [...this.imports, ...this.providers];
  },
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(...authenticatedController);
  }
}
