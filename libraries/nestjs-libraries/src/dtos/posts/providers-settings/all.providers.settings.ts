import { RedditSettingsDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/reddit.dto';
import { PinterestSettingsDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/pinterest.dto';
import { YoutubeSettingsDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/youtube.settings.dto';
import { TikTokDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/tiktok.dto';
import { XDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/x.dto';
import { DribbbleDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/dribbble.dto';
import { DiscordDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/discord.dto';
import { SlackDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/slack.dto';
import { InstagramDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/instagram.dto';
import { LinkedinDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/linkedin.dto';
import { IsIn } from 'class-validator';
import { WordpressDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/wordpress.dto';
import { GmbSettingsDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/gmb.settings.dto';
import { FacebookDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/facebook.dto';
import { TumblrDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/tumblr.dto';

export type ProviderExtension<T extends string, M> = { __type: T } & M;
export type AllProvidersSettings =
  | ProviderExtension<'reddit', RedditSettingsDto>
  | ProviderExtension<'youtube', YoutubeSettingsDto>
  | ProviderExtension<'pinterest', PinterestSettingsDto>
  | ProviderExtension<'dribbble', DribbbleDto>
  | ProviderExtension<'tiktok', TikTokDto>
  | ProviderExtension<'discord', DiscordDto>
  | ProviderExtension<'slack', SlackDto>
  | ProviderExtension<'x', XDto>
  | ProviderExtension<'linkedin', LinkedinDto>
  | ProviderExtension<'linkedin-page', LinkedinDto>
  | ProviderExtension<'instagram', InstagramDto>
  | ProviderExtension<'instagram-standalone', InstagramDto>
  | ProviderExtension<'wordpress', WordpressDto>
  | ProviderExtension<'gmb', GmbSettingsDto>
  | ProviderExtension<'facebook', FacebookDto>
  | ProviderExtension<'threads', None>
  | ProviderExtension<'mastodon', None>
  | ProviderExtension<'bluesky', None>
  | ProviderExtension<'telegram', None>
  | ProviderExtension<'tumblr', TumblrDto>;

type None = NonNullable<unknown>;

export const allProviders = (setEmpty?: any) => {
  return [
    { value: RedditSettingsDto, name: 'reddit' },
    { value: YoutubeSettingsDto, name: 'youtube' },
    { value: PinterestSettingsDto, name: 'pinterest' },
    { value: DribbbleDto, name: 'dribbble' },
    { value: TikTokDto, name: 'tiktok' },
    { value: DiscordDto, name: 'discord' },
    { value: SlackDto, name: 'slack' },
    { value: XDto, name: 'x' },
    { value: LinkedinDto, name: 'linkedin' },
    { value: LinkedinDto, name: 'linkedin-page' },
    { value: InstagramDto, name: 'instagram' },
    { value: InstagramDto, name: 'instagram-standalone' },
    { value: WordpressDto, name: 'wordpress' },
    { value: GmbSettingsDto, name: 'gmb' },
    { value: FacebookDto, name: 'facebook' },
    { value: setEmpty, name: 'threads' },
    { value: setEmpty, name: 'mastodon' },
    { value: setEmpty, name: 'bluesky' },
    { value: setEmpty, name: 'telegram' },
    { value: TumblrDto, name: 'tumblr' },
  ].filter((f) => f.value);
};

export class EmptySettings {
  @IsIn(allProviders(EmptySettings).map((p) => p.name), {
    message: `"__type" must be ${allProviders(EmptySettings)
      .map((p) => p.name)
      .join(', ')}`,
  })
  __type: string;
}
