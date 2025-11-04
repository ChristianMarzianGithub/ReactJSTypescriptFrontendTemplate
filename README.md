# MyApp – React + TypeScript Starter

This project is a fully responsive React application bootstrapped manually with Vite, TailwindCSS and TypeScript. It includes a multi-page layout with dark mode support, a GDPR-friendly cookie consent banner and accessibility-minded navigation.

## Getting started

```bash
npm install
npm run dev
```

The app will be available on <http://localhost:5173>. To build for production run `npm run build` and preview with `npm run preview`.

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
