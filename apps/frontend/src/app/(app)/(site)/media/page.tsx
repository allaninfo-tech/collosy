import { MediaLayoutComponent } from '@collosy/frontend/components/new-layout/layout.media.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@collosy/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Collosy' : 'Collosy'} Media`,
  description: '',
};

export default async function Page() {
  return <MediaLayoutComponent />
}
