import { createWebRouter } from 'retend/router';
import { waitingRoute } from './pages/waiting/routes';
import { rootRoutes } from './pages/root/routes';

export function createRouter() {
  return createWebRouter({ routes: [waitingRoute, rootRoutes] });
}
