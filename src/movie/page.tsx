import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../shared/components/errorMessage';
import { useMovie } from './hooks';
import { HandleAsync } from '../shared/components/handleAsync';
import { Container } from '../shared/components/container';
import { TMDBImage } from '../shared/components/tmdbImg';
import { ImageCard } from './imageCard';
import { useGetCollection } from '@/collection/hooks';

function Page() {
  const { movieId } = useParams();
  if (!movieId) return <ErrorMessage message="No movie found" />;
  const { movie, loading, error } = useMovie(movieId);
  const { collection } = useGetCollection();
  const movieLogo = movie?.images?.logos.filter(
    (img) => img.iso_639_1 == navigator.language.slice(0, 2)
  );

  return (
    <HandleAsync loading={loading} error={error}>
      <Container backgroundImage={movie?.backdrop_path}>
        <div className="mt-8 sticky top-8">
          {movieLogo !== undefined && movieLogo.length > 0 ? (
            <TMDBImage
              type="logo"
              path={movieLogo[0].file_path}
              alt={movie?.title}
            />
          ) : (
            <h1 className="text-4xl font-extrabold font-title">
              {movie?.title}
            </h1>
          )}
          <p className="font-bold">
            {movie?.release_date.slice(0, 4)}
            {movie?.title != movie?.original_title && (
              <>
                {' | '}
                <span className="italic font-thin">
                  {movie?.original_title}
                </span>
              </>
            )}
          </p>
          <p className="text-gray-400 mt-4">
            {movie?.vote_average.toFixed(1)} / 10
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-2"
        >
          {movie?.images?.backdrops.map((img) => (
            <ImageCard
              type="backdrop"
              movie_id={movie.id}
              inCollection={
                !!collection?.find((entry) => entry.file_path == img.file_path)
              }
              {...img}
            />
          ))}
          {movie?.images?.posters.map((img) => (
            <ImageCard
              type="poster"
              movie_id={movie.id}
              inCollection={
                !!collection?.find((entry) => entry.file_path == img.file_path)
              }
              key={img.file_path}
              {...img}
            />
          ))}
        </div>
      </Container>
    </HandleAsync>
  );
}

export default Page;
