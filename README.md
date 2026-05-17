# Vega B2B Workspace

Strategic scaffold for a Vega Helmets B2B storefront and purchase-order management platform built on Next.js, Firebase, Firestore, Cloud Functions, and GitHub Actions.

## Workspace Layout

- `apps/web`: Next.js App Router frontend for the storefront, admin console, and order orchestration views.
- `functions`: Firebase Cloud Functions workspace for order events, invoices, notifications, and operational automation.
- `docs`: architecture guidance, phased implementation intent, and platform boundaries.

## Core Commands

```bash
pnpm dev
pnpm build
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
