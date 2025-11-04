import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  preview: {
    allowedHosts: ['frontend-template-456699820088.europe-west4.run.app']
  }
});
