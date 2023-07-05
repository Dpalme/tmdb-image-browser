import { HandleAsync } from '@/shared/components/handleAsync';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useSearch } from './hooks';
import { TMDBImage } from '@/shared/components/tmdbimages/tmdbImg';
import { InfiniteScrollTrigger } from '@/shared/components/infinteScrollerTrigger';
import { Container } from '@/shared/components/container';
import { FallbackPosters } from '@/shared/components/fallbackPosters';

const SearchResultsPage = () => {
  const [searchParams, _] = useSearchParams();
  const query = searchParams.get('query');
  const { movies, error, loading, fetchNextPage, hasNextPage } = useSearch(
    query || ''
  );

  return (
    <>
      <div
        className="grid grid-cols-2 md:grid-cols-4
        lg:grid-cols-6 xl:grid-cols-8 gap-2"
      >
        <HandleAsync
          loading={loading}
          error={error}
          fallback={<FallbackPosters numberOfPosters={25} />}
        >
          {!!movies && movies.length == 0 && !!searchParams.get('query') && (
            <p className="font-title text-3xl">No results</p>
          )}
          {movies !== undefined &&
            movies.map((movie) => (
              <NavLink
                to={`/movie/${movie.id}`}
                className="scale-100 hover:scale-110 transform
            transition-transform duration-300"
              >
                <TMDBImage
                  type="poster"
                  path={movie.poster_path}
                  key={movie.id}
                />
              </NavLink>
            ))}
        </HandleAsync>
      </div>
      {!!movies && movies.length > 0 && hasNextPage && (
        <InfiniteScrollTrigger fetchNextPage={fetchNextPage} padding={64} />
      )}
    </>
  );
};

export default SearchResultsPage;
