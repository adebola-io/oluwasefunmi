import { createWebRouter } from 'retend/router';
import { waitingRoute } from './pages/waiting/routes';
import { rootRoutes, sidebarAvoidanceMiddleware } from './pages/root/routes';

export * as context from 'retend/context';

export function createRouter() {
  return createWebRouter({
    routes: [waitingRoute, rootRoutes],
    useViewTransitions: true,
    stackMode: true,
    middlewares: [sidebarAvoidanceMiddleware],
  });
}
