export const dynamic = 'force-dynamic';
import { Forgot } from '@collosy/frontend/components/auth/forgot';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@collosy/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Collosy' : 'Collosy'} Forgot Password`,
  description: '',
};
export default async function Auth() {
  return <Forgot />;
}
