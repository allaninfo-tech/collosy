'use client';

import {
  PostComment,
  withProvider,
} from '@collosy/frontend/components/new-launch/providers/high.order.provider';
import { FC } from 'react';
import { DiscordDto } from '@collosy/nestjs-libraries/dtos/posts/providers-settings/discord.dto';
import { DiscordChannelSelect } from '@collosy/frontend/components/new-launch/providers/discord/discord.channel.select';
import { useSettings } from '@collosy/frontend/components/launches/helpers/use.values';
const DiscordComponent: FC = () => {
  const form = useSettings();
  return (
    <div>
      <DiscordChannelSelect {...form.register('channel')} />
    </div>
  );
};
export default withProvider({
  postComment: PostComment.COMMENT,
  minimumCharacters: [],
  SettingsComponent: DiscordComponent,
  CustomPreviewComponent: undefined,
  dto: DiscordDto,
  maximumCharacters: 1980,
});
