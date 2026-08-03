import { Global, Module } from '@nestjs/common';
import { PrismaRepository, PrismaService, PrismaTransaction } from './prisma.service';
import { OrganizationRepository } from '@collosy/nestjs-libraries/database/prisma/organizations/organization.repository';
import { OrganizationService } from '@collosy/nestjs-libraries/database/prisma/organizations/organization.service';
import { UsersService } from '@collosy/nestjs-libraries/database/prisma/users/users.service';
import { UsersRepository } from '@collosy/nestjs-libraries/database/prisma/users/users.repository';
import { SubscriptionService } from '@collosy/nestjs-libraries/database/prisma/subscriptions/subscription.service';
import { SubscriptionRepository } from '@collosy/nestjs-libraries/database/prisma/subscriptions/subscription.repository';
import { NotificationService } from '@collosy/nestjs-libraries/database/prisma/notifications/notification.service';
import { IntegrationService } from '@collosy/nestjs-libraries/database/prisma/integrations/integration.service';
import { IntegrationRepository } from '@collosy/nestjs-libraries/database/prisma/integrations/integration.repository';
import { PostsService } from '@collosy/nestjs-libraries/database/prisma/posts/posts.service';
import { PostsRepository } from '@collosy/nestjs-libraries/database/prisma/posts/posts.repository';
import { IntegrationManager } from '@collosy/nestjs-libraries/integrations/integration.manager';
import { MediaService } from '@collosy/nestjs-libraries/database/prisma/media/media.service';
import { MediaRepository } from '@collosy/nestjs-libraries/database/prisma/media/media.repository';
import { NotificationsRepository } from '@collosy/nestjs-libraries/database/prisma/notifications/notifications.repository';
import { EmailService } from '@collosy/nestjs-libraries/services/email.service';
import { StripeService } from '@collosy/nestjs-libraries/services/stripe.service';
import { ExtractContentService } from '@collosy/nestjs-libraries/openai/extract.content.service';
import { OpenaiService } from '@collosy/nestjs-libraries/openai/openai.service';
import { AgenciesService } from '@collosy/nestjs-libraries/database/prisma/agencies/agencies.service';
import { AgenciesRepository } from '@collosy/nestjs-libraries/database/prisma/agencies/agencies.repository';
import { TrackService } from '@collosy/nestjs-libraries/track/track.service';
import { ShortLinkService } from '@collosy/nestjs-libraries/short-linking/short.link.service';
import { WebhooksRepository } from '@collosy/nestjs-libraries/database/prisma/webhooks/webhooks.repository';
import { WebhooksService } from '@collosy/nestjs-libraries/database/prisma/webhooks/webhooks.service';
import { SignatureRepository } from '@collosy/nestjs-libraries/database/prisma/signatures/signature.repository';
import { SignatureService } from '@collosy/nestjs-libraries/database/prisma/signatures/signature.service';
import { AutopostRepository } from '@collosy/nestjs-libraries/database/prisma/autopost/autopost.repository';
import { AutopostService } from '@collosy/nestjs-libraries/database/prisma/autopost/autopost.service';
import { SetsService } from '@collosy/nestjs-libraries/database/prisma/sets/sets.service';
import { SetsRepository } from '@collosy/nestjs-libraries/database/prisma/sets/sets.repository';
import { ThirdPartyRepository } from '@collosy/nestjs-libraries/database/prisma/third-party/third-party.repository';
import { ThirdPartyService } from '@collosy/nestjs-libraries/database/prisma/third-party/third-party.service';
import { VideoManager } from '@collosy/nestjs-libraries/videos/video.manager';
import { FalService } from '@collosy/nestjs-libraries/openai/fal.service';
import { RefreshIntegrationService } from '@collosy/nestjs-libraries/integrations/refresh.integration.service';
import { OAuthRepository } from '@collosy/nestjs-libraries/database/prisma/oauth/oauth.repository';
import { OAuthService } from '@collosy/nestjs-libraries/database/prisma/oauth/oauth.service';
import { AnnouncementsRepository } from '@collosy/nestjs-libraries/database/prisma/announcements/announcements.repository';
import { AnnouncementsService } from '@collosy/nestjs-libraries/database/prisma/announcements/announcements.service';
import { ErrorsRepository } from '@collosy/nestjs-libraries/database/prisma/errors/errors.repository';
import { ErrorsService } from '@collosy/nestjs-libraries/database/prisma/errors/errors.service';
import { AdminStatsRepository } from '@collosy/nestjs-libraries/database/prisma/admin-stats/admin-stats.repository';
import { AdminStatsService } from '@collosy/nestjs-libraries/database/prisma/admin-stats/admin-stats.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    PrismaRepository,
    PrismaTransaction,
    UsersService,
    UsersRepository,
    OrganizationService,
    OrganizationRepository,
    SubscriptionService,
    SubscriptionRepository,
    NotificationService,
    NotificationsRepository,
    WebhooksRepository,
    WebhooksService,
    IntegrationService,
    IntegrationRepository,
    PostsService,
    PostsRepository,
    StripeService,
    SignatureRepository,
    AutopostRepository,
    AutopostService,
    SignatureService,
    MediaService,
    MediaRepository,
    AgenciesService,
    AgenciesRepository,
    IntegrationManager,
    RefreshIntegrationService,
    ExtractContentService,
    OpenaiService,
    FalService,
    EmailService,
    TrackService,
    ShortLinkService,
    SetsService,
    SetsRepository,
    ThirdPartyRepository,
    ThirdPartyService,
    OAuthRepository,
    OAuthService,
    VideoManager,
    AnnouncementsRepository,
    AnnouncementsService,
    ErrorsRepository,
    ErrorsService,
    AdminStatsRepository,
    AdminStatsService,
  ],
  get exports() {
    return this.providers;
  },
})
export class DatabaseModule {}
