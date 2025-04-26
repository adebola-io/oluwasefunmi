import { defineRoutes, lazy } from 'retend/router';

export const playgroundRoutes = defineRoutes([
  {
    name: 'Playground Index',
    path: 'playground',
    component: lazy(() => import('./index')),
  },
  {
    name: 'Playground Components',
    path: 'playground',
    children: [
      {
        name: 'Playground - Focus List',
        path: ':id',
        component: lazy(() => import('./[id]')),
      },
    ],
  },
]);
