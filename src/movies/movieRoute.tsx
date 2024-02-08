import rootRoute from '@/App';
import { createRoute, lazyRouteComponent } from '@tanstack/react-router';
import { getMovie } from './services';
import { ErrorMessage } from '@/shared/components/errorMessage';

export const MovieRoute = createRoute({
  path: '/movies/$movieId',
  getParentRoute: () => rootRoute,
  parseParams: (params) => {
    return {
      movieId: params.movieId + '',
    };
  },
  loader: (args) => {
    const queryClient = args.context.queryClient,
      movieId = args.params.movieId;
    queryClient.prefetchQuery({
      queryKey: ['movies', movieId],
      queryFn: () => getMovie(movieId),
    });
  },
  errorComponent: ({ error }) => <ErrorMessage message={error!.toString()} />,
  component: lazyRouteComponent(() => import('./lazyMovieComponent')),
});

export default MovieRoute;
