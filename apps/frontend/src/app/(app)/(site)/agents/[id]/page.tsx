import { Metadata } from 'next';
import { Agent } from '@collosy/frontend/components/agents/agent';
import { AgentChat } from '@collosy/frontend/components/agents/agent.chat';
export const metadata: Metadata = {
  title: 'Collosy - Agent',
  description: '',
};
export default async function Page() {
  return (
    <AgentChat />
  );
}
