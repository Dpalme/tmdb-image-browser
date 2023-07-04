import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSearch } from './services';
import { useCallback } from 'react';

export const useSearch = (query: string) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['search', query],
      ({ pageParam = 1 }) => getSearch(query, pageParam),
      {
        getNextPageParam: (lastPage, _) =>
          lastPage.page + 1 < lastPage.total_pages ? lastPage.page + 1 : null,
      }
    );

  const safeFetchNextPage = useCallback(() => {
    if (!hasNextPage) return;
    fetchNextPage();
  }, [hasNextPage]);

  return {
    movies: data?.pages.flatMap((page) => page.results),
    error: error as AxiosError | undefined,
    loading: isLoading,
    fetchNextPage: safeFetchNextPage,
    hasNextPage,
  };
};
