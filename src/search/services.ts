import { useTMDB } from '../shared/hooks/useTMDB';
import { ITMDBMovie } from '../shared/models/movie';

export async function getSearch(
  query: string,
  page: number = 1
): Promise<IPage<ITMDBMovie>> {
  return useTMDB(
    '/3/search/movie?query=' + query + '&page=' + page
  ) as unknown as Promise<IPage<ITMDBMovie>>;
}
