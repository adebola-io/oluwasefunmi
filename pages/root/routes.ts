import {
  defineRoute,
  defineRouterMiddleware,
  lazy,
  redirect,
} from 'retend/router';
import RootLayout from '.';
import Home from './home';
import { playgroundRoutes } from './playground/playground.routes.ts';

export const rootRoutes = defineRoute({
  name: 'Website Root',
  path: '',
  redirect: '/home',
  component: RootLayout,
  children: [
    {
      name: 'Website Home',
      path: 'home',
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
      path: 'random-notes',
      name: 'Website Random Notes Index',
      component: lazy(() => import('./random-notes/index.tsx')),
    },
    {
      name: 'Website Random Note Page',
      path: 'random-notes/:id',
      component: lazy(() => import('./random-notes/[id].tsx')),
    },
    ...playgroundRoutes,
  ],
});

/**
 * Prevents the sidebar from being reachable in normal router navigation.
 */
export const sidebarAvoidanceMiddleware = defineRouterMiddleware(
  ({ from, to }) => {
    // We are navigating to a route that has a sidebar query parameter.
    if (!to.query.has('sidebar')) return;
    // We are navigating to a different route than the one we are currently on.
    if (from && to.fullPath.startsWith(from.fullPath)) return;

    to.query.delete('sidebar');
    return redirect(to.path);
  }
);
