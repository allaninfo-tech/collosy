export const dynamic = 'force-dynamic';
import { LaunchesComponent } from '@collosy/frontend/components/launches/launches.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@collosy/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Collosy Calendar' : 'Collosy Launches'}`,
  description: '',
};
export default async function Index() {
  return <LaunchesComponent />;
}
