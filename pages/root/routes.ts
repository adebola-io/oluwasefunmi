import { defineRoute, lazy } from 'retend/router';
import RootLayout from '.';
import Home from './home';

export const rootRoutes = defineRoute({
  name: 'Website Root',
  path: '',
  component: RootLayout,
  children: [
    {
      name: 'Website Home',
      path: '',
      component: Home,
    },
    {
      name: 'Website Works',
      path: 'works',
      component: lazy(() => import('./works/index.tsx')),
    },
    {
      name: 'Website Contact',
      path: 'contact',
      component: lazy(() => import('./contact.tsx')),
    },
    {
      name: 'Website Random Notes',
      path: 'random-notes',
      children: [
        {
          name: 'Website Random Notes Index',
          path: '',
          component: lazy(() => import('./random-notes/index.tsx')),
        },
        {
          name: 'Website Random Note Page',
          path: ':id',
          component: lazy(() => import('./random-notes/[id].tsx')),
        },
      ],
    },
    // {
    //   name: 'Website Playground',
    //   path: 'playground',
    //   component: lazy(() => import('./playground/index.tsx')),
    // },
  ],
});
