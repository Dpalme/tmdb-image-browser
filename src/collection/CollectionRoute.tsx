import { createRoute } from '@tanstack/react-router';
import rootRoute from '@/App';
import { getCollection } from '@/shared/providers/database';

export const CollectionRoute = createRoute({
  path: '/collection',
  getParentRoute: () => rootRoute,
  beforeLoad: ({ context: { queryClient } }) =>
    queryClient.prefetchQuery({
      queryKey: ['collection'],
      queryFn: () => getCollection(),
    }),
}).lazy(() => import('./page').then((d) => d.CollectionPageLazyRouter));
