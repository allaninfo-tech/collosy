export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { AfterActivate } from '@collosy/frontend/components/auth/after.activate';
import { isGeneralServerSide } from '@collosy/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${
    isGeneralServerSide() ? 'Collosy' : 'Collosy'
  } - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <AfterActivate />;
}
