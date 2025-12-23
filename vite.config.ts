import { defineConfig } from 'vite';
import path from 'node:path';
import { retend } from 'retend-web/plugin';
import { retendSSG } from 'retend-server/plugin';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import mdx from '@mdx-js/rollup';
import process from 'node:process';

const notes = fs
  .readdirSync('./content/markdown')
  .map((name) => `/random-notes/${name}`);

const pages = [
  '/',
  '/works',
  '/contact',
  '/random-notes',
  // '/playground',
  ...notes,
];

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(process.cwd(), './') },
  },
  plugins: [
    tailwindcss(),
    mdx({ jsxImportSource: 'retend' }),
    retend(),
    retendSSG({
      pages,
      routerModulePath: './router.ts',
    }),
  ],
});
