import { NavLink } from 'react-router-dom';
import { Container } from '../shared/components/container';
import { HandleAsync } from '../shared/components/handleAsync';
import { TMDBImage } from '../shared/components/tmdbimages/tmdbImg';
import { useFeed } from './hooks';
import { InfiniteScrollTrigger } from '@/shared/components/infinteScrollerTrigger';
import { FallbackPosters } from '@/shared/components/fallbackPosters';
import { MovieCard } from './components/movieCard';

const Homepage = () => {
  const { movies, error, loading, fetchNextPage, hasNextPage } = useFeed();
  return (
    <Container gridClass="!grid-cols-1">
      <div
        className="grid grid-cols-2 md:grid-cols-4
        lg:grid-cols-6 xl:grid-cols-8 gap-2"
      >
        <HandleAsync
          loading={loading}
          error={error}
          fallback={<FallbackPosters numberOfPosters={25} />}
        >
          {movies !== undefined &&
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id}/>
            ))}
          {hasNextPage && (
            <InfiniteScrollTrigger fetchNextPage={fetchNextPage} padding={32} />
          )}
        </HandleAsync>
      </div>
    </Container>
  );
};

export default Homepage;
