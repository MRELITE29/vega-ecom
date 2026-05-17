# Vega B2B Platform Architecture

## Product Intent

The platform is designed for distributors, dealers, and bulk buyers who need an ordering workflow that behaves like procurement software, not consumer retail. Every layer should reduce friction for high-volume repeat ordering while giving operations teams tight control over stock, approvals, fulfillment, and reporting.

## Bounded Contexts

### 1. Storefront Experience

- Product discovery by model, segment, color, and availability.
- Bulk-order mechanics centered on cartons and master boxes.
- Repeat-order shortcuts, favorites, and recommendations.

### 2. Order Orchestration

- Cart normalization into purchase-order line items.
- Approval, invoice generation, dispatch readiness, and notifications.
- Commercial calculations for box counts, unit totals, GST-ready summaries, and dispatch windows.

### 3. Operations Console

- Inventory monitoring, order exceptions, revenue visibility, and demand insights.
- Admin actions for approvals, stock updates, shipment progression, and exports.

### 4. Intelligence Layer

- Recommendation signals for reorders and affinity bundles.
- Predictive demand and low-stock trend indicators.
- Lightweight browser-safe TensorFlow.js entry points and server-assisted aggregation.

## Suggested Repo Ownership

### `apps/web`

- `src/app`: route orchestration and page composition.
- `src/components`: reusable interface primitives and domain presentation components.
- `src/lib`: environment contracts, Firebase adapters, mock repositories, and pure business utilities.
- `src/store`: client-side workflow state, especially the bulk cart.
- `src/types`: domain contracts shared across feature areas.

### `functions`

- `src/orders`: event handlers and invoice orchestration.
- `src/notifications`: email or messaging transport adapters.
- `src/shared`: reusable config, logging, and serialization utilities.

## Firestore Modeling Direction

- `users`: identity profile and role metadata.
- `vendors`: dealer account settings, buying patterns, credit flags, and territory data.
- `products`: catalog records and sales packaging metadata.
- `inventory`: stock snapshots, reorder thresholds, and warehouse state.
- `orders`: purchase-order lifecycle state and fulfillment checkpoints.
- `purchase_orders`: immutable PO artifacts and downloadable references.
- `invoices`: invoice metadata, storage references, and reconciliation state.
- `analytics`: aggregate counters and denormalized reporting views.
- `recommendations`: per-account reorder and product affinity suggestions.

## Delivery Phases

1. Foundation: design system, app shells, domain contracts, Firebase bootstrap, CI.
2. Workflow Core: authentication, catalog data, bulk cart, order submission, admin review.
3. Commercial Ops: invoices, shipment tracking, exports, notifications, audit history.
4. Intelligence: reorder suggestions, demand forecasting, anomaly alerts, inventory risk scoring.

## Operational Principles

- Default to static-friendly frontend delivery where possible, with Firebase services handling dynamic behavior.
- Keep Firebase reads deliberate through denormalized summary documents and paginated list patterns.
- Treat Cloud Functions as orchestration boundaries for side effects such as PDFs, email, and analytics fan-out.
- Preserve role separation through explicit route guards, claims-based authorization, and narrow write permissions.
