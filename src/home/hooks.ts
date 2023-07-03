import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getFeed } from './services';

export const useFeed = () => {
  const { data, error, isLoading } = useQuery(['feed'], () => getFeed());

  return {
    movies: data?.results,
    error: error as AxiosError | undefined,
    loading: isLoading,
  };
};
