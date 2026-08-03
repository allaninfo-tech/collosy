import { Plugs } from '@collosy/frontend/components/plugs/plugs';
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@collosy/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Collosy' : 'Collosy'} Plugs`,
  description: '',
};
export default async function Index() {
  return <Plugs />;
}
