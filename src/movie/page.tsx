import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../shared/components/errorMessage';
import { useMovie } from './hooks';
import { HandleAsync } from '../shared/components/handleAsync';
import { Container } from '../shared/components/container';
import { TMDBImage } from '../shared/components/tmdbimages/tmdbImg';
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
      <Container backgroundImage={movie?.images?.backdrops[0].file_path || ''}>
        <div className="h-[100vh - 3.5rem]">
          <div
            className="flex-col fixed bottom-8
          items-start justify-end w-full drop-shadow-lg filter overscroll-auto"
          >
            {movieLogo !== undefined && movieLogo.length > 0 ? (
              <TMDBImage
                type="logo"
                path={movieLogo[0].file_path}
                alt={movie?.title}
                className="drop-shadow-md filter max-h-24 w-auto"
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
            <p className="text-gray-700 dark:text-gray-400 mt-4">
              {movie?.vote_average.toFixed(1)} / 10
            </p>
          </div>
        </div>
        <div className="md:col-start-2 animate-slide-in-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {movie?.images?.backdrops
              .sort((a, b) => b.height - a.height + (b.width - a.width))
              .map((img) => (
                <ImageCard
                  type="backdrop"
                  movie_id={movie.id}
                  inCollection={
                    !!collection?.find(
                      (entry) => entry.file_path == img.file_path
                    )
                  }
                  {...img}
                  key={img.file_path}
                />
              ))}
            {movie?.images?.posters
              .sort((a, b) => b.height - a.height + (b.width - a.width))
              .map((img) => (
                <ImageCard
                  type="poster"
                  movie_id={movie.id}
                  inCollection={
                    !!collection?.find(
                      (entry) => entry.file_path == img.file_path
                    )
                  }
                  key={img.file_path}
                  {...img}
                />
              ))}
          </div>
        </div>
      </Container>
    </HandleAsync>
  );
}

export default Page;
