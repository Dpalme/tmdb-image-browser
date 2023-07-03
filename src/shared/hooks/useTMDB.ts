import { useFetch } from './useFetch';

const TMDB_BASE_URL = 'https://api.themoviedb.org';

export const useTMDB = (path: string, params = {}) => {
  return useFetch(TMDB_BASE_URL + path, params, {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  });
};
