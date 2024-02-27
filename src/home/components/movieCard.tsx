import { TMDBImage } from '@/shared/components/tmdbimages/tmdbImg';
import { ITMDBMovie } from '@/shared/models/movie';
import { Link } from '@tanstack/react-router';

export function MovieCard({ movie }: { movie: ITMDBMovie }) {
  return (
    <Link
      to={`/movies/$movieId`}
      params={{ movieId: movie.id + '' }}
      className="scale-100 hover:(scale-110 z-2) transform
                transition-transform duration-300"
      key={movie.id}
    >
      <div style={{ aspectRatio: '0.667 / 1' }}>
        <TMDBImage
          type="poster"
          path={movie.poster_path}
        />
      </div>
      <div className="p-2">
        <h2 className="text-sm mb-1 truncate">{movie.title}</h2>
        <p className="text-xs">{movie?.release_date.slice(0, 4)}</p>
      </div>
    </Link>
  );
}
