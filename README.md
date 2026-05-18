# Vega B2B Workspace

Strategic scaffold for a Vega Helmets B2B storefront and purchase-order management platform built on Next.js, Firebase, Firestore, Cloud Functions, and GitHub Actions.

## Workspace Layout

- `apps/web`: Next.js App Router frontend for the storefront, admin console, and order orchestration views.
- `functions`: Firebase Cloud Functions workspace for order events, invoices, notifications, and operational automation.
- `docs`: architecture guidance, phased implementation intent, and platform boundaries.

## Getting Started (Local Development)

This project is configured as a **pnpm monorepo**. Running a standard `npm install` in the root will **not** bootstrap the sub-packages correctly (like the Next.js app in `apps/web`), which leads to missing command errors such as `'next' is not recognized`. 

Follow these steps to configure and run the project locally:

### 1. Prerequisites
- **Node.js**: version `20.0.0` or higher is required.
- **Package Manager**: `pnpm` is used for workspace management. If you don't have `pnpm` installed globally, you can run commands prefixed with `npx pnpm` (which automatically downloads and runs `pnpm`).

### 2. Install Dependencies
Run the installation command at the project root to install dependencies for the root and all workspaces (`apps/web` and `functions`):

```bash
# If you have pnpm installed globally:
pnpm install

# If you do not have pnpm installed globally:
npx pnpm install
```

### 3. Environment Setup
Before starting, copy the `.env.example` template to create your local environment file:

```bash
cp .env.example .env
```
Fill in the Firebase configuration values in `.env` to connect the storefront to your Firebase instance.

### 4. Run the Development Server
Start the local Next.js development server:

```bash
# Using pnpm (recommended)
pnpm dev

# Using npx (if pnpm is not installed globally)
npx pnpm dev

# Using standard npm (only after dependencies have been installed via pnpm/npx pnpm)
npm run dev
```

Once started, the development server is available at **[http://localhost:3000](http://localhost:3000)**.

## Core Commands

```bash
# Install dependencies
pnpm install

# Start local Next.js dev server
pnpm dev

# Build production bundle for the Next.js app
pnpm build

# Lint the codebase
pnpm lint
```

## Delivery Shape

- Procurement-first storefront optimized for cartons and master boxes.
- Admin operations surface for inventory, dispatch, and buyer insights.
- Firebase-first backend contracts for auth, order events, invoices, and alerts.
- CI/CD baseline for web quality gates and Firebase deployment preparation.

## Immediate Next Integrations

1. Connect the scaffolded Firebase clients to a real project using `.env.example`.
2. Install workspace dependencies at the repo root so `functions` joins the monorepo lifecycle.
3. Replace mock datasets with Firestore repositories and role-aware auth guards.
4. Wire invoice PDF generation and transactional email transport in Cloud Functions.
