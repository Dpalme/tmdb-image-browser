import { useTMDB } from '../shared/hooks/useTMDB';
import { ITMDBMovie } from '../shared/models/movie';

export async function getFeed(page: number): Promise<IPage<ITMDBMovie>> {
  return useTMDB('/3/movie/popular?page=' + page) as unknown as Promise<
    IPage<ITMDBMovie>
  >;
}
