import { Router } from 'retend/router';
import { rootRoutes } from './pages/root/routes';
import { waitingRoute } from './pages/waiting/routes';

export function createRouter() {
  return new Router({
    routes: [waitingRoute, rootRoutes],
    useViewTransitions: true,
  });
}
