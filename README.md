# Social Media Management Platform

A modern, full-stack social media scheduling and analytics platform.

## Monorepo Architecture

This project is a monorepo managed with **pnpm** with a root-only `package.json` for dependencies.

### Core Applications & Libraries
- **`apps/frontend`**: Next.js / Vite React frontend dashboard UI (calendar view, post scheduling, analytics, media library, team management, settings).
- **`apps/backend`**: NestJS core REST API handling authentication, integrations, social provider connections, scheduling logic, and database operations.
- **`apps/orchestrator`**: Temporal background worker (NestJS) handling execution, workflows, activities, and posting tasks.
- **`apps/commands`**: Internal CLI commands and administrative scripts.
- **`apps/sdk`**: Client SDK for interacting with the backend API.
- **`apps/extension`**: Browser extension for scheduling content directly from the web.
- **`libraries/`**: Shared services, NestJS modules, database Prisma schemas, helpers, and React UI components.

---

## Development Guidelines & Rules

### Backend Standards
- **Layering Pattern**: Every backend feature must follow the strict layer hierarchy without shortcuts:
  $$\text{DTO} \longrightarrow \text{Controller} \longrightarrow \text{Service} \longrightarrow \text{Repository}$$
  *(Or with manager: $\text{DTO} \longrightarrow \text{Controller} \longrightarrow \text{Manager} \longrightarrow \text{Service} \longrightarrow \text{Repository}$)*
- **Server Logic Placement**: Most core server logic belongs in `libraries/nestjs-libraries` (`libs/server`). The backend app is primarily controllers importing services from libraries.
- **Database Access**: Never use raw SQL queries; always use Prisma.
- **Provider Generality**: Code must remain strictly generic. Never place provider-specific logic (e.g. `if (facebookProvider)`) inside generic engine files. Extend the provider interface and implement provider-specific behavior in the corresponding provider class.

### Temporal Workflows & Activities
- **Workflow Immutability**: Production workflow files should not be modified directly because changing workflow definitions breaks active workflows. Instead, create a new versioned workflow and update call sites.
- **Activity Parameters**: Activity signatures/parameters must not be changed in place; create a new activity with new parameters and reference it from a new workflow version.

### Frontend Standards
- **UI Components**: UI primitives reside in `apps/frontend/src/components/ui`.
- **Routing & Views**: Routing is in `apps/frontend/src/app` and components in `apps/frontend/src/components`.
- **Tailwind & Styling**: Uses Tailwind CSS. Check `/apps/frontend/src/app/colors.scss`, `/apps/frontend/src/app/global.scss`, and `/apps/frontend/tailwind.config.js`. Avoid deprecated `--color-custom*` variables.
- **Component Policy**: Focus on native/custom components rather than pulling arbitrary external UI libraries.
- **Data Fetching (SWR)**:
  - Always use SWR via `useFetch` (`libraries/helpers/src/utils/custom.fetch.tsx`).
  - Each SWR query must be isolated in its own custom hook obeying `react-hooks/rules-of-hooks`:
    ```typescript
    // Correct
    const useCommunity = () => {
      return useSWR(...);
    };
    ```

---

## Getting Started

### Prerequisites
- **Node.js**: `>= 22.12.0 < 23.0.0`
- **pnpm**: `10.x` (Do not use other package managers)
- **Docker & Docker Compose** (for PostgreSQL, Redis, etc.)

### Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Configure required environment variables (Database URL, Redis URL, JWT Secret, Social API credentials).

### Database Setup

Generate and push Prisma database schema:
```bash
pnpm run prisma-generate
pnpm run prisma-db-push
```

### Running Locally

Run all services in development mode:
```bash
pnpm run dev
```

Or run individual services:
- **Backend + Frontend**: `pnpm run dev-backend`
- **Frontend only**: `pnpm run dev:frontend`
- **Backend only**: `pnpm run dev:backend`
- **Orchestrator only**: `pnpm run dev:orchestrator`

### Building for Production

Build all workspace applications:
```bash
pnpm run build
```
