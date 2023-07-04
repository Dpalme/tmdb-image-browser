import { HandleAsync } from '@/shared/components/handleAsync';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useSearch } from './hooks';
import { TMDBImage } from '@/shared/components/tmdbimages/tmdbImg';
import { InfiniteScrollTrigger } from '@/shared/components/infinteScrollerTrigger';

const SearchResultsPage = () => {
  const [searchParams, _] = useSearchParams();
  const query = searchParams.get('query');
  if (!query) return;
  const { movies, error, loading, fetchNextPage, hasNextPage } =
    useSearch(query);

  return (
    <HandleAsync loading={loading} error={error}>
      <div
        className="grid grid-cols-2 md:grid-cols-4
    lg:grid-cols-6 xl:grid-cols-8 gap-2"
      >
        <h2 className="col-span-full">{query}</h2>
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
        {hasNextPage && <InfiniteScrollTrigger fetchNextPage={fetchNextPage} />}
      </div>
    </HandleAsync>
  );
};

export default SearchResultsPage;
