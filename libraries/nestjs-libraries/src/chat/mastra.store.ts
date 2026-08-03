import { PostgresStore } from '@mastra/pg';

export const pStore = new PostgresStore({
  id: 'collosy-store',
  connectionString: process.env.DATABASE_URL!,
});
