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
}

export const projects: Project[] = [
  {
    id: 0,
    name: 'vizitly',
    description: 'A visitor',
    link: '/works/vizitly',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--secondary-color:#000] [--icon-opacity:.2]',
      'hover:[--primary-color:#23AD5F] hover:[--plane-backdrop-color:#23AD5F] hover:[--secondary-color:#66ED27]',
    ],
    icon: VizitlyIcon,
  },
  {
    id: 1,
    name: 'Enjoy Your Day',
    description: 'A visitor',
    link: '/works/enjoy-your-day',
    class: [
      'col-span-8',
      '[--primary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#55556C] hover:[--plane-backdrop-color:#55556C]',
    ],
    icon: EnjoyYourDayIcon,
  },
  {
    id: 2,
    name: 'Retend',
    description: 'A visitor',
    link: '/works/retend',
    class: [
      'col-span-5 row-span-2',
      '[--primary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#ED923C] hover:[--plane-backdrop-color:#ED923C]',
    ],
    icon: RetendIcon,
  },
  {
    id: 3,
    name: 'Whirlwind',
    description: 'A programming language',
    link: '/works/whirlwind',
    class: [
      'col-span-7',
      '[--primary-color:var(--color-text)] [--secondary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#a2cab4] hover:[--plane-backdrop-color:#7ab294] hover:[--secondary-color:#7ab294]',
    ],
    icon: WhirlwindIcon,
  },
  {
    id: 4,
    name: 'Quizwiz',
    description: 'A visitor',
    link: '/works/quizwiz',
    class: [
      'col-span-7',
      '[--primary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#364f52] hover:[--plane-backdrop-color:#364f52]',
    ],
    icon: QuizwizIcon,
  },
  {
    id: 5,
    name: 'Siphon',
    description: 'A parser and bundler for Javascript',
    link: '/works/siphon',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--secondary-color:var(--color-stroke)] [--icon-opacity:.2]',
      'hover:[--primary-color:#C38400] hover:[--plane-backdrop-color:#F0B744] hover:[--secondary-color:#F0B744]',
    ],
    icon: SiphonIcon,
  },
  {
    id: 6,
    name: 'Spry',
    description: 'An ecommerce-clothing store concept written in Nuxt.js',
    link: '/works/spry',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--secondary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#B0228C] hover:[--plane-backdrop-color:#B0228C] hover:[--secondary-color:#F391A0]',
    ],
    icon: SpryIcon,
  },
  {
    id: 7,
    name: 'Cadence',
    description: 'A landing page for a logistics company.',
    link: '/works/cadence',
    class: [
      'col-span-4',
      '[--primary-color:var(--color-text)] [--secondary-color:var(--color-text)] [--tertiary-color:var(--color-text)] [--icon-opacity:.2]',
      'hover:[--primary-color:#125E8A] hover:[--plane-backdrop-color:#197BBD] hover:[--secondary-color:#197BBD] hover:[--tertiary-color:#8A716A]',
    ],
    icon: CadenceIcon,
  },
];
