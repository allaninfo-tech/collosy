'use client';

import React from 'react';
import { useT } from '@collosy/react/translation/get.transation.service.client';
import dynamic from 'next/dynamic';
import EmailNotificationsComponent from '@collosy/frontend/components/settings/email-notifications.component';
import ShortlinkPreferenceComponent from '@collosy/frontend/components/settings/shortlink-preference.component';

const MetricComponent = dynamic(
  () => import('@collosy/frontend/components/settings/metric.component'),
  {
    ssr: false,
  }
);

export const GlobalSettings = () => {
  const t = useT();
  return (
    <div className="flex flex-col">
      <h3 className="text-[20px]">{t('global_settings', 'Global Settings')}</h3>
      <MetricComponent />
      <EmailNotificationsComponent />
      <ShortlinkPreferenceComponent />
    </div>
  );
};
