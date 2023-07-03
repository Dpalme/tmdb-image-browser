import { useTMDB } from '../shared/hooks/useTMDB';
import { ITMDBMovie } from '../shared/models/movie';

export async function getFeed(): Promise<IPage<ITMDBMovie>> {
  return useTMDB('/3/movie/popular') as unknown as Promise<IPage<ITMDBMovie>>;
}
