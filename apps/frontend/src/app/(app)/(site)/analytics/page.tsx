export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { PlatformAnalytics } from '@collosy/frontend/components/platform-analytics/platform.analytics';
import { isGeneralServerSide } from '@collosy/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Collosy' : 'Collosy'} Analytics`,
  description: '',
};
export default async function Index() {
  return <PlatformAnalytics />;
}
