import { createWebRouter } from 'retend/router';
import { rootRoutes } from './pages/root/routes';
import { waitingRoute } from './pages/waiting/routes';

export function createRouter() {
  return createWebRouter({
    routes: [waitingRoute, rootRoutes],
    useViewTransitions: true,
  });
}
