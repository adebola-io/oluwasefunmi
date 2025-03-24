import {
  defineRoute,
  defineRouterMiddleware,
  lazy,
  redirect,
} from 'retend/router';
import RootLayout from '.';
import Home from './home';

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
      name: 'Website Random Notes',
      path: 'random-notes',
      redirect: '/random-notes/index',
      children: [
        {
          name: 'Website Random Notes Index',
          path: 'index',
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
