import 'reflect-metadata';

import { Injectable } from '@nestjs/common';
import { XProvider } from '@collosy/nestjs-libraries/integrations/social/x.provider';
import { SocialProvider } from '@collosy/nestjs-libraries/integrations/social/social.integrations.interface';
import { LinkedinProvider } from '@collosy/nestjs-libraries/integrations/social/linkedin.provider';
import { RedditProvider } from '@collosy/nestjs-libraries/integrations/social/reddit.provider';
import { FacebookProvider } from '@collosy/nestjs-libraries/integrations/social/facebook.provider';
import { InstagramProvider } from '@collosy/nestjs-libraries/integrations/social/instagram.provider';
import { YoutubeProvider } from '@collosy/nestjs-libraries/integrations/social/youtube.provider';
import { TiktokProvider } from '@collosy/nestjs-libraries/integrations/social/tiktok.provider';
import { PinterestProvider } from '@collosy/nestjs-libraries/integrations/social/pinterest.provider';
import { DribbbleProvider } from '@collosy/nestjs-libraries/integrations/social/dribbble.provider';
import { LinkedinPageProvider } from '@collosy/nestjs-libraries/integrations/social/linkedin.page.provider';
import { ThreadsProvider } from '@collosy/nestjs-libraries/integrations/social/threads.provider';
import { DiscordProvider } from '@collosy/nestjs-libraries/integrations/social/discord.provider';
import { SlackProvider } from '@collosy/nestjs-libraries/integrations/social/slack.provider';
import { MastodonProvider } from '@collosy/nestjs-libraries/integrations/social/mastodon.provider';
import { BlueskyProvider } from '@collosy/nestjs-libraries/integrations/social/bluesky.provider';
import { InstagramStandaloneProvider } from '@collosy/nestjs-libraries/integrations/social/instagram.standalone.provider';
import { TelegramProvider } from '@collosy/nestjs-libraries/integrations/social/telegram.provider';
import { WordpressProvider } from '@collosy/nestjs-libraries/integrations/social/wordpress.provider';
import { GmbProvider } from '@collosy/nestjs-libraries/integrations/social/gmb.provider';
import { SocialAbstract } from '@collosy/nestjs-libraries/integrations/social.abstract';
import { TumblrProvider } from '@collosy/nestjs-libraries/integrations/social/tumblr.provider';

export const socialIntegrationList: Array<SocialAbstract & SocialProvider> = [
  new XProvider(),
  new LinkedinProvider(),
  new LinkedinPageProvider(),
  new RedditProvider(),
  new InstagramProvider(),
  new InstagramStandaloneProvider(),
  new FacebookProvider(),
  new ThreadsProvider(),
  new YoutubeProvider(),
  new GmbProvider(),
  new TiktokProvider(),
  new PinterestProvider(),
  new DribbbleProvider(),
  new DiscordProvider(),
  new SlackProvider(),
  new MastodonProvider(),
  new BlueskyProvider(),
  new TelegramProvider(),
  new WordpressProvider(),
  new TumblrProvider(),
];

@Injectable()
export class IntegrationManager {
  async getAllIntegrations() {
    return {
      social: await Promise.all(
        socialIntegrationList.map(async (p) => ({
          name: p.name,
          identifier: p.identifier,
          toolTip: p.toolTip,
          editor: p.editor,
          isExternal: !!p.externalUrl,
          isWeb3: !!p.isWeb3,
          isChromeExtension: !!p.isChromeExtension,
          ...(p.extensionCookies
            ? { extensionCookies: p.extensionCookies }
            : {}),
          ...(p.customFields ? { customFields: await p.customFields() } : {}),
        }))
      ),
      article: [] as any[],
    };
  }

  getAllTools(): {
    [key: string]: {
      description: string;
      dataSchema: any;
      methodName: string;
    }[];
  } {
    return socialIntegrationList.reduce(
      (all, current) => ({
        ...all,
        [current.identifier]:
          Reflect.getMetadata('custom:tool', current.constructor.prototype) ||
          [],
      }),
      {}
    );
  }

  getAllRulesDescription(): {
    [key: string]: string;
  } {
    return socialIntegrationList.reduce(
      (all, current) => ({
        ...all,
        [current.identifier]:
          Reflect.getMetadata(
            'custom:rules:description',
            current.constructor
          ) || '',
      }),
      {}
    );
  }

  getAllPlugs() {
    return socialIntegrationList
      .map((p) => {
        return {
          name: p.name,
          identifier: p.identifier,
          plugs: (
            Reflect.getMetadata('custom:plug', p.constructor.prototype) || []
          )
            .filter((f: any) => !f.disabled)
            .map((p: any) => ({
              ...p,
              fields: p.fields.map((c: any) => ({
                ...c,
                validation: c?.validation?.toString(),
              })),
            })),
        };
      })
      .filter((f) => f.plugs.length);
  }

  getInternalPlugs(providerName: string) {
    const p = socialIntegrationList.find((p) => p.identifier === providerName)!;
    return {
      internalPlugs:
        (
          Reflect.getMetadata(
            'custom:internal_plug',
            p.constructor.prototype
          ) || []
        ).filter((f: any) => !f.disabled) || [],
    };
  }

  getAllowedSocialsIntegrations() {
    return socialIntegrationList.map((p) => p.identifier);
  }
  getSocialIntegration(integration: string): SocialProvider {
    return socialIntegrationList.find((i) => i.identifier === integration)!;
  }
}
