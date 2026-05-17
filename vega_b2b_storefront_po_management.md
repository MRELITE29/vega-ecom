Build a production-ready B2B Storefront + PO Management E-commerce Web App for Vega Helmets using Next.js, Firebase, Firebase Hosting, Firestore, Firebase Auth, Cloud Functions, GitHub Actions CI/CD, and lightweight TensorFlow.js ML models for smart recommendations and predictive UX enhancements.

CORE OBJECTIVE

The platform should enable distributors, dealers, wholesalers, and bulk buyers to easily place large-volume orders of Vega products through an ultra-simple, enterprise-grade ordering experience.

The system should prioritize:

Fast ordering
Minimum clicks
High clarity
Mobile-first B2B usability
Professional dashboard experience
Frictionless PO workflow
Operational efficiency for admin and vendors

The UI should feel like:

Shopify Admin + Razorpay Dashboard + Apple-level simplicity
Clean whitespace
Clear typography
Minimal distractions
Large touch targets
Fast loading
Enterprise professional
Not flashy
Not consumer-ecommerce styled
BUSINESS MODEL

Products are sold in:

Individual SKUs
Master Boxes / Cartons

A Master Box contains:

600 units per box

Bulk buyers should primarily order:

Master Boxes
Large quantity cartons

The platform should intelligently optimize the experience around bulk ordering instead of retail cart logic.

PRIMARY USER TYPES
1. Distributor / Vendor / Bulk Buyer

Can:

Browse products
Filter by category/model/type
Add cartons/master boxes to cart
Generate purchase orders
Receive confirmation emails
Download invoices
Track order status
Reorder previous purchases quickly
Save favorite recurring orders
2. Admin

Can:

Manage inventory
Manage product catalog
Manage dealers/vendors
Approve or review orders
Generate invoices
Update shipment status
View analytics dashboard
View high-demand products
Export reports
Manage stock availability
Configure carton quantities
REQUIRED USER FLOW
CUSTOMER FLOW
User lands on storefront
Simple login/signup
Browse Vega helmet products
Select:
Model
Variant
Color
Quantity
Master Box count
Smart bulk pricing auto-calculates
Cart updates instantly
User places order
System generates:
Order summary
Purchase order
GST-ready invoice
Customer instantly sees:
Confirmation page
Order ID
Estimated dispatch
Confirmation email is sent automatically
Invoice PDF is emailed
Admin dashboard receives order notification

The flow should take less than:

2 minutes for repeat customers
5 minutes for new customers
UX REQUIREMENTS
CRITICAL UX PRINCIPLES
1. Ultra Fast Ordering
One-click reorder
Quantity presets
Smart quantity memory
Frequently purchased suggestions
2. Bulk Order Optimized
Cart built for cartons/master boxes
Not standard retail cart UX
Show:
Units per carton
Total helmets
Total cartons
Volume summary
3. Minimal Cognitive Load
Avoid clutter
Avoid excessive colors
Avoid unnecessary animations
Keep workflows linear
4. Mobile + Tablet Friendly

Many distributors will use phones during business hours because apparently billion-rupee operations still run through WhatsApp and cracked Android screens.

SMART FEATURES USING LIGHTWEIGHT TENSORFLOW MODELS

Use TensorFlow.js lightweight models for:

Smart Recommendations
Frequently ordered together
Similar product suggestions
Seasonal demand suggestions
Predictive UX
Auto-suggest reorder quantities
Predict preferred products
Recommend fast-moving inventory
Smart Admin Insights
Demand trend prediction
Low stock prediction
Repeat customer behavior

Keep models lightweight and browser-efficient.

TECH STACK
Frontend
Next.js App Router
TypeScript
Tailwind CSS
Framer Motion (minimal use)
ShadCN UI
Backend
Firebase Auth
Firestore
Firebase Storage
Firebase Functions
Firebase Hosting
CI/CD
GitHub Actions
Automated deployment pipeline
Environment separation:
Dev
Staging
Production
FIREBASE DATA STRUCTURE

Design scalable Firestore collections for:

users
vendors
orders
products
inventory
invoices
purchase_orders
analytics
recommendations

Ensure:

optimized querying
indexing
scalable pagination
low read/write costs
ADMIN DASHBOARD FEATURES
Dashboard Widgets
Revenue overview
Pending orders
Dispatch queue
Top selling models
Inventory alerts
Repeat buyers
Sales heatmap
Order Management
Approve/reject orders
Generate invoice PDFs
Update shipment tracking
Export CSV/PDF reports
Inventory Controls
Product stock
Carton quantity configuration
Batch updates
EMAIL AUTOMATION

On successful order:

Send professional confirmation email
Send invoice PDF attachment
Send admin notification email

Use:

Firebase Functions
Nodemailer or transactional email API

Email templates should be:

minimal
branded
professional
mobile responsive
PERFORMANCE REQUIREMENTS
Lighthouse score above 90
Optimized Firebase reads
Lazy-loaded assets
Fast search/filtering
Offline-safe partial caching
Optimistic UI updates
SECURITY

Implement:

Firebase security rules
Role-based access control
Admin authorization
Protected routes
Rate limiting
Secure invoice generation
DESIGN SYSTEM

Use:

Neutral professional palette
Industrial/manufacturing aesthetics
Clean cards
Strong hierarchy
Spacious layouts
Functional typography

Avoid:

flashy startup gradients
gaming-style UI
excessive motion
cluttered dashboards
DELIVERABLES

Generate:

Full application architecture
Firestore schema
UI/UX wireframes
Reusable component system
Authentication flow
Admin dashboard
Vendor storefront
Cart & PO workflow
Invoice system
ML recommendation module
GitHub Actions CI/CD pipeline
Firebase deployment setup
Mobile responsive layouts
Production folder structure
API/service abstraction layer
Error handling strategy
Scalable state management
Notification system

The final output should feel like a scalable enterprise B2B procurement platform, not a typical retail shopping website