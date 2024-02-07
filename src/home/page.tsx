import { Container } from '@shared/components/container';
import { HandleAsync } from '@shared/components/handleAsync';
import { TMDBImage } from '@shared/components/tmdbimages/tmdbImg';
import { feedQuery, useFeed } from './hooks';
import { InfiniteScrollTrigger } from '@/shared/components/infinteScrollerTrigger';
import { FallbackPosters } from '@/shared/components/fallbackPosters';
import { MovieCard } from './components/movieCard';
import { createRoute } from '@tanstack/react-router';
import rootRoute from '@/App';

export const HomeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  loader: ({ context: { queryClient } }) =>
    queryClient.prefetchInfiniteQuery(feedQuery),
  component: Homepage,
});

function Homepage() {
  const { movies, error, loading, fetchNextPage, hasNextPage } = useFeed();
  return (
    <Container gridClass="!grid-cols-1">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-2">
        <HandleAsync
          loading={loading}
          error={error}
          fallback={<FallbackPosters numberOfPosters={32} />}
        >
          {movies !== undefined &&
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
          {hasNextPage && (
            <InfiniteScrollTrigger fetchNextPage={fetchNextPage} padding={32} />
          )}
        </HandleAsync>
      </div>
    </Container>
  );
}

export default HomeRoute;
