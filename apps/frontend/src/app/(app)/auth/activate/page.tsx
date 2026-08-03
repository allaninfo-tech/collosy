export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { Activate } from '@collosy/frontend/components/auth/activate';
import { isGeneralServerSide } from '@collosy/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${
    isGeneralServerSide() ? 'Collosy' : 'Collosy'
  } - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <Activate />;
}
