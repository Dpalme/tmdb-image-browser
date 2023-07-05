import { NavLink } from 'react-router-dom';
import { Container } from '../shared/components/container';
import { HandleAsync } from '../shared/components/handleAsync';
import { TMDBImage } from '../shared/components/tmdbimages/tmdbImg';
import { useFeed } from './hooks';
import { InfiniteScrollTrigger } from '@/shared/components/infinteScrollerTrigger';
import { FallbackPosters } from '@/shared/components/fallbackPosters';

const Homepage = () => {
  const { movies, error, loading, fetchNextPage, hasNextPage } = useFeed();
  return (
    <Container containerClass="!grid-cols-1">
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
              <NavLink
                to={`/movie/${movie.id}`}
                className="scale-100 hover:scale-110 transform
                transition-transform duration-300"
                key={movie.id}
              >
                <TMDBImage type="poster" path={movie.poster_path} />
              </NavLink>
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
