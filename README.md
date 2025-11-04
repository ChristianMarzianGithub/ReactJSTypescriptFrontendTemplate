# MyApp – React + TypeScript Starter

This project is a fully responsive React application bootstrapped manually with Vite, TailwindCSS and TypeScript. It includes a multi-page layout with dark mode support, a GDPR-friendly cookie consent banner and accessibility-minded navigation.

## Getting started

```bash
npm install
npm run dev
```

The app will be available on <http://localhost:5173>. To build for production run `npm run build` and preview with `npm run preview`.

## Docker & Cloud Run deployment

You can containerise the application for Google Cloud Run using the provided `Dockerfile`.

### Build the container locally

```bash
docker build -t myapp:latest .
```

### Run the container locally

```bash
docker run --rm -p 8080:8080 myapp:latest
```

The app will be accessible at <http://localhost:8080>. Cloud Run automatically provides the `PORT` environment variable consumed by the container entrypoint.

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

## Testing

Run the unit tests powered by Vitest and Testing Library:

```bash
npm test
```

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
