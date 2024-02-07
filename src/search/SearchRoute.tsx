import rootRoute from '@/App';
import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

const SearchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: lazyRouteComponent(() => import('./page')),
});

export default SearchRoute;
