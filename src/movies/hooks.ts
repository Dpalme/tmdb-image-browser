import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getMovie } from './services';

export const useMovie = (movieId: number | string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies', movieId],
    queryFn: () => getMovie(movieId),
  });

  return {
    movie: data,
    error: error as AxiosError | undefined,
    loading: isLoading,
  };
};
