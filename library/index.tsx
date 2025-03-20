import { CadenceIcon } from '@/components/icons/cadence';
import { EnjoyYourDayIcon } from '@/components/icons/enjoy-your-day';
import { QuizwizIcon } from '@/components/icons/quizwiz';
import { RetendIcon } from '@/components/icons/retend';
import { SiphonIcon } from '@/components/icons/siphon';
import { SpryIcon } from '@/components/icons/spry';
import { VizitlyIcon } from '@/components/icons/vizitly';
import { WhirlwindIcon } from '@/components/icons/whirlwind';
import type { JSX } from 'retend/jsx-runtime';

export const timeline = [
  '0ms',
  'calc(var(--duration) * 0.25)',
  'calc(var(--duration) * 0.5)',
];

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  class?: unknown;
  icon: (props: JSX.IntrinsicElements['svg']) => JSX.Template;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 0,
    name: 'vizitly',
    description: 'Complete suite for a modern visitor management system.',
    link: '/works/vizitly',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--secondary-color:#000] [--icon-opacity:.2]',
      'hover:[--primary-color:#23AD5F] hover:[--plane-backdrop-color:#23AD5F] hover:[--secondary-color:#66ED27]',
    ],
    icon: VizitlyIcon,
    tags: ['nuxt', 'vue', 'scss', 'pwa', 'typescript', 'bootstrap', 'web'],
  },
  {
    id: 1,
    name: 'enjoy your day',
    description: 'Fast progressive web app for tracking daily goals.',
    link: '/works/enjoy-your-day',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#55556C] hover:[--plane-backdrop-color:#55556C]',
    ],
    icon: EnjoyYourDayIcon,
    tags: ['pwa', 'typescript', 'css modules', 'dexie', 'localfirst', 'web'],
  },
  {
    id: 2,
    name: 'retend',
    description: 'React-inspired JSX framework for fast and fluid web apps.',
    link: '/works/retend',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#ED923C] hover:[--plane-backdrop-color:#ED923C]',
    ],
    icon: RetendIcon,
    tags: ['jsx', 'vite', 'frameworks', 'dsa', 'dev tools', 'web'],
  },
  {
    id: 3,
    name: 'whirlwind',
    description:
      'Compiler, checker and IDE extension for a statically-typed, general-purpose, compiled-to-WASM programming language.',
    link: '/works/whirlwind',
    class: [
      'col-span-8',
      '[--primary-color:var(--color-text)] [--secondary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#7ab294] hover:[--plane-backdrop-color:#7ab294] hover:[--secondary-color:#a2cab4]',
    ],
    icon: WhirlwindIcon,
    tags: ['compilers', 'type checkers', 'rust', 'tokio', 'dsa', 'dev-tools'],
  },
  {
    id: 4,
    name: 'quizwiz',
    description:
      'Quiz game to test and improve knowledge across a variety of subjects.',
    link: '/works/quizwiz',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#364f52] hover:[--plane-backdrop-color:#364f52]',
    ],
    icon: QuizwizIcon,
    tags: ['react', 'typescript', 'tailwindcss', 'mongodb', 'node.js', 'web'],
  },
  {
    id: 5,
    name: 'siphon',
    description:
      'Crude, non-compliant bundler and minifier for HTML, CSS and JS projects.',
    link: '/works/siphon',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--secondary-color:var(--color-stroke)] [--icon-opacity:.2]',
      'hover:[--primary-color:#C38400] hover:[--plane-backdrop-color:#F0B744] hover:[--secondary-color:#F0B744]',
    ],
    icon: SiphonIcon,
    tags: ['node.js', 'compilers', 'jsx', 'dev tools'],
  },
  {
    id: 6,
    name: 'spry',
    description:
      'Landing page concept for an e-commerce clothing and fabric store.',
    link: '/works/spry',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--secondary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#B0228C] hover:[--plane-backdrop-color:#B0228C] hover:[--secondary-color:#F391A0]',
    ],
    icon: SpryIcon,
    tags: ['nuxt', 'vue', 'tailwind', 'web', 'scss', 'typescript'],
  },
  {
    id: 7,
    name: 'cadence',
    description: 'Website for a small logistics management company.',
    link: '/works/cadence',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--secondary-color:var(--color-text)] [--tertiary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#125E8A] hover:[--plane-backdrop-color:#197BBD] hover:[--secondary-color:#197BBD] hover:[--tertiary-color:#8A716A]',
    ],
    icon: CadenceIcon,
    tags: ['web', 'vue', 'typescript', 'gsap', 'scss'],
  },
];
