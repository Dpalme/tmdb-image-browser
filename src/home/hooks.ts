import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getFeed } from './services';

export const feedQuery = infiniteQueryOptions({
  queryKey: ['feed'],
  queryFn: ({ pageParam }) => getFeed(pageParam),
  initialPageParam: 1,
  getNextPageParam: (lastPage, _) =>
    lastPage.page + 1 < lastPage.total_pages ? lastPage.page + 1 : null,
  getPreviousPageParam: (lastPage, _) =>
    lastPage.page - 1 > 0 ? lastPage.page - 1 : null,
});

export const useFeed = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery(feedQuery);

  return {
    movies: data?.pages.flatMap((page) => page.results),
    error: error as AxiosError | undefined,
    loading: isLoading,
    fetchNextPage,
    hasNextPage,
  };
};
