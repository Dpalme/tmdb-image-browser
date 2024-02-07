import { HandleAsync } from '@/shared/components/handleAsync';
import { useSearch } from './hooks';
import { TMDBImage } from '@/shared/components/tmdbimages/tmdbImg';
import { InfiniteScrollTrigger } from '@/shared/components/infinteScrollerTrigger';
import { FallbackPosters } from '@/shared/components/fallbackPosters';
import { Link, createRoute } from '@tanstack/react-router';
import { getSearch } from './services';
import SearchRoute from './SearchRoute';

type SearchArguments = {
  query: string;
};

export const SearchResultsRoute = createRoute({
  path: '/',
  loaderDeps: ({ search: { query } }) => ({ query }),
  validateSearch: (search: Record<string, unknown>): SearchArguments => {
    // validate and parse the search params into a typed state
    return {
      query: (search.query as string) || '',
    };
  },
  getParentRoute: () => SearchRoute,
  loader: (args) => {
    const queryClient = args.context.queryClient,
      query = args.deps.query;
    queryClient.prefetchInfiniteQuery({
      queryKey: ['search', query],
      queryFn: ({ pageParam }) => getSearch(query, pageParam),
      initialPageParam: 1,
    });
  },
  component: SearchResultsPage,
});

function SearchResultsPage() {
  const { query } = SearchResultsRoute.useSearch();
  const { movies, error, loading, fetchNextPage, hasNextPage } =
    useSearch(query);

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
          {!!movies && movies.length == 0 && query && (
            <p className="font-title text-3xl">No results</p>
          )}
          {movies !== undefined &&
            movies.map((movie) => (
              <Link
                key={movie.id}
                to="/movies/$movieId"
                params={{ movieId: movie.id + '' }}
                className="scale-100 hover:scale-110 transform
            transition-transform duration-300"
              >
                <TMDBImage type="poster" path={movie.poster_path} />
              </Link>
            ))}
        </HandleAsync>
      </div>
      {!!movies && movies.length > 0 && hasNextPage && (
        <InfiniteScrollTrigger fetchNextPage={fetchNextPage} padding={64} />
      )}
    </>
  );
}

export default SearchResultsRoute;
