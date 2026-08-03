export const dynamic = 'force-dynamic';
import { Login } from '@collosy/frontend/components/auth/login';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@collosy/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Collosy' : 'Collosy'} Login`,
  description: '',
};
export default async function Auth() {
  return <Login />;
}
