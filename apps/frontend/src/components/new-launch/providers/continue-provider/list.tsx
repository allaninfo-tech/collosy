'use client';

import { InstagramContinue } from '@collosy/frontend/components/new-launch/providers/continue-provider/instagram/instagram.continue';
import { FacebookContinue } from '@collosy/frontend/components/new-launch/providers/continue-provider/facebook/facebook.continue';
import { LinkedinContinue } from '@collosy/frontend/components/new-launch/providers/continue-provider/linkedin/linkedin.continue';
import { GmbContinue } from '@collosy/frontend/components/new-launch/providers/continue-provider/gmb/gmb.continue';
import { YoutubeContinue } from '@collosy/frontend/components/new-launch/providers/continue-provider/youtube/youtube.continue';
import { TumblrContinue } from '@collosy/frontend/components/new-launch/providers/continue-provider/tumblr/tumblr.continue';

export const continueProviderList = {
  instagram: InstagramContinue,
  facebook: FacebookContinue,
  'linkedin-page': LinkedinContinue,
  gmb: GmbContinue,
  youtube: YoutubeContinue,
  tumblr: TumblrContinue,
};
