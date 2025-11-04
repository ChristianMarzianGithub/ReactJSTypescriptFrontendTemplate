# MyApp – React + TypeScript Starter

This project is a fully responsive React application bootstrapped manually with Vite, TailwindCSS and TypeScript. It includes a multi-page layout with dark mode support, a GDPR-friendly cookie consent banner and accessibility-minded navigation.

## Getting started

```bash
npm install
npm run dev
```

The app will be available on <http://localhost:5173>. To build for production run `npm run build` and preview with `npm run preview`.

## Docker & Cloud Run deployment

You can containerise the application for Google Cloud Run using the provided `Dockerfile`. The final image now serves the
static production build with Nginx so the container remains lightweight and production ready without bundling the Vite
preview server.

### Build the container locally

```bash
docker build -t myapp:latest .
```

### Run the container locally

```bash
docker run --rm -p 8080:80 myapp:latest
```

The app will be accessible at <http://localhost:8080>. When deploying to Cloud Run, remember to map the platform-provided port to container port `80`.

### Deploy to Google Cloud Run

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/myapp
gcloud run deploy myapp \
  --image gcr.io/PROJECT_ID/myapp \
  --platform managed \
  --region REGION \
  --allow-unauthenticated
```

Replace `PROJECT_ID` and `REGION` with your Google Cloud project information.

> **Note:** Because the container now serves static assets via Nginx, no additional preview host configuration is required. If you need to apply custom caching or routing behaviour, mount an Nginx configuration file or extend the final stage with your own `nginx.conf`.

## Testing

Run the unit tests powered by Vitest and Testing Library:

```bash
npm test
```

Custom DOM matchers from Testing Library are available globally because the TypeScript configuration includes the `@testing-library/jest-dom` types, so assertions such as `toBeInTheDocument()` remain type-safe.

## Project structure

- `src/assets`: Static assets such as the logo.
- `src/components`: Reusable UI components including the header, footer, dark mode toggle and cookie banner.
- `src/hooks`: Custom hooks for dark mode and cookie consent state.
- `src/layout`: Layout wrapper that applies the site chrome.
- `src/pages`: Routed pages (Home, Contact, FAQ, Privacy Policy, Imprint).
- `src/__tests__`: Vitest + Testing Library tests.

## Features

- Responsive header with mobile navigation and persistent dark mode toggle.
- Cookie consent banner persisted in `localStorage`.
- TailwindCSS styling with mobile-first utilities.
- React Router-powered navigation across all placeholder pages.
