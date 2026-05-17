# Vega Web App

Next.js App Router frontend for the Vega B2B storefront.

## Standard Local Run

Run the app from this folder, not by opening files from `out/` directly.

```bash
cmd /c pnpm install
cmd /c .\node_modules\.bin\next.cmd dev
```

Open `http://localhost:3000`.

## If The UI Looks Unstyled

That means the CSS bundle is not being served or the app was opened the wrong way.

Use this reset flow:

```bash
rmdir /s /q .next
cmd /c pnpm install
cmd /c .\node_modules\.bin\next.cmd dev
```

Then hard refresh the browser.

## Verification

```bash
cmd /c .\node_modules\.bin\next.cmd lint
cmd /c .\node_modules\.bin\next.cmd build
```
