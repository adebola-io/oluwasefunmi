import { defineConfig } from 'vite';
import path from 'node:path';
import { retend } from 'retend/plugin';
import { retendSSG } from 'retend-server/plugin';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import mdx from '@mdx-js/rollup';
import process from 'node:process';

const notes = fs
  .readdirSync('./content/markdown')
  .map((file) => `/random-notes/${file.slice(0, -4)}`);

// Combine base routes with markdown routes
const pages = [
  '/',
  '/works',
  '/contact',
  '/random-notes',
  '/playground',
  ...notes,
];

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(process.cwd(), './') },
  },
  plugins: [
    tailwindcss(),
    mdx({ jsxImportSource: 'retend', development: true }),
    retend(),
    retendSSG({
      pages,
      routerModulePath: './router.ts',
    }),
  ],
});
