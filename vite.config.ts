/* eslint-disable spaced-comment */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~bulma': 'node_modules/bulma',
      '@': '/src',
    },
  },
  test: {
    environment: 'jsdom',
  },
});
