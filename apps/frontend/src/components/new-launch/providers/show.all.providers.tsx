'use client';

import XProvider from '@collosy/frontend/components/new-launch/providers/x/x.provider';
import LinkedinProvider from '@collosy/frontend/components/new-launch/providers/linkedin/linkedin.provider';
import RedditProvider from '@collosy/frontend/components/new-launch/providers/reddit/reddit.provider';
import FacebookProvider from '@collosy/frontend/components/new-launch/providers/facebook/facebook.provider';
import InstagramProvider from '@collosy/frontend/components/new-launch/providers/instagram/instagram.collaborators';
import YoutubeProvider from '@collosy/frontend/components/new-launch/providers/youtube/youtube.provider';
import TiktokProvider from '@collosy/frontend/components/new-launch/providers/tiktok/tiktok.provider';
import PinterestProvider from '@collosy/frontend/components/new-launch/providers/pinterest/pinterest.provider';
import DribbbleProvider from '@collosy/frontend/components/new-launch/providers/dribbble/dribbble.provider';
import ThreadsProvider from '@collosy/frontend/components/new-launch/providers/threads/threads.provider';
import DiscordProvider from '@collosy/frontend/components/new-launch/providers/discord/discord.provider';
import SlackProvider from '@collosy/frontend/components/new-launch/providers/slack/slack.provider';
import MastodonProvider from '@collosy/frontend/components/new-launch/providers/mastodon/mastodon.provider';
import BlueskyProvider from '@collosy/frontend/components/new-launch/providers/bluesky/bluesky.provider';
import TelegramProvider from '@collosy/frontend/components/new-launch/providers/telegram/telegram.provider';
import WordpressProvider from '@collosy/frontend/components/new-launch/providers/wordpress/wordpress.provider';
import GmbProvider from '@collosy/frontend/components/new-launch/providers/gmb/gmb.provider';
import TumblrProvider from '@collosy/frontend/components/new-launch/providers/tumblr/tumblr.provider';
import { useLaunchStore } from '@collosy/frontend/components/new-launch/store';
import { useShallow } from 'zustand/react/shallow';
import React, { FC, forwardRef, useImperativeHandle } from 'react';
import { GeneralPreviewComponent } from '@collosy/frontend/components/launches/general.preview.component';
import { IntegrationContext } from '@collosy/frontend/components/launches/helpers/use.integration';
import { useT } from '@collosy/react/translation/get.transation.service.client';

export const Providers = [
  {
    identifier: 'x',
    component: XProvider,
  },
  {
    identifier: 'linkedin',
    component: LinkedinProvider,
  },
  {
    identifier: 'linkedin-page',
    component: LinkedinProvider,
  },
  {
    identifier: 'reddit',
    component: RedditProvider,
  },
  {
    identifier: 'facebook',
    component: FacebookProvider,
  },
  {
    identifier: 'instagram',
    component: InstagramProvider,
  },
  {
    identifier: 'instagram-standalone',
    component: InstagramProvider,
  },
  {
    identifier: 'youtube',
    component: YoutubeProvider,
  },
  {
    identifier: 'tiktok',
    component: TiktokProvider,
  },
  {
    identifier: 'pinterest',
    component: PinterestProvider,
  },
  {
    identifier: 'dribbble',
    component: DribbbleProvider,
  },
  {
    identifier: 'threads',
    component: ThreadsProvider,
  },
  {
    identifier: 'discord',
    component: DiscordProvider,
  },
  {
    identifier: 'slack',
    component: SlackProvider,
  },
  {
    identifier: 'mastodon',
    component: MastodonProvider,
  },
  {
    identifier: 'bluesky',
    component: BlueskyProvider,
  },
  {
    identifier: 'telegram',
    component: TelegramProvider,
  },
  {
    identifier: 'wordpress',
    component: WordpressProvider,
  },
  {
    identifier: 'gmb',
    component: GmbProvider,
  },
  {
    identifier: 'tumblr',
    component: TumblrProvider,
  },
];

export const ShowAllProviders = forwardRef((props, ref) => {
  const { date, current, global, selectedIntegrations, allIntegrations } =
    useLaunchStore(
      useShallow((state) => ({
        date: state.date,
        selectedIntegrations: state.selectedIntegrations,
        allIntegrations: state.integrations,
        current: state.current,
        global: state.global,
      }))
    );

  const t = useT();

  useImperativeHandle(ref, () => ({
    checkAllValid: async () => {
      return Promise.all(
        selectedIntegrations.map(async (p) => await p.ref?.current.isValid())
      );
    },
    getAllValues: async () => {
      return Promise.all(
        selectedIntegrations.map(async (p) => await p.ref?.current.getValues())
      );
    },
    triggerAll: () => {
      return selectedIntegrations.map(
        async (p) => await p.ref?.current.trigger()
      );
    },
  }));

  return (
    <div className="w-full flex flex-col flex-1">
      {current === 'global' && (
        <IntegrationContext.Provider
          value={{
            date,
            integration:
              selectedIntegrations?.[0]?.integration || allIntegrations?.[0],
            allIntegrations: selectedIntegrations.map((p) => p.integration),
            value: global.map((p) => ({
              id: p.id,
              content: p.content,
              image: p.media,
            })),
          }}
        >
          {global?.[0]?.content?.length === 0 ? (
            <div>
              {t(
                'start_writing_your_post',
                'Start writing your post for a preview'
              )}
            </div>
          ) : (
            <div className="border border-borderPreview rounded-[12px] shadow-previewShadow">
              <GeneralPreviewComponent maximumCharacters={100000000} />
            </div>
          )}
        </IntegrationContext.Provider>
      )}
      {selectedIntegrations.map((integration) => {
        const { component: ProviderComponent } = Providers.find(
          (provider) =>
            provider.identifier === integration.integration.identifier
        ) || {
          component: Empty,
        };

        return (
          <ProviderComponent
            ref={integration.ref}
            key={integration.integration.id}
            id={integration.integration.id}
          />
        );
      })}
    </div>
  );
});

export const Empty: FC = () => {
  return null;
};
