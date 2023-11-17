import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../shared/components/errorMessage';
import { useMovie } from './hooks';
import { HandleAsync } from '../shared/components/handleAsync';
import { Container } from '../shared/components/container';
import { TMDBImage } from '../shared/components/tmdbimages/tmdbImg';
import { ImageCard } from '../shared/components/tmdbimages/imageCard';
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
      <div className="w-screen h-screen overflow-x-hidden overflow-y-scrol md:mt-16">
        <Container
          backgroundImage={movie?.images?.backdrops[0].file_path || ''}
          relative={true}
          sectionClass="h-[calc(100vh-8rem)] flex flex-col justify-end overflow-hidden !w-screen"
          containerClass="flex flex-col justify-end relative pb-20 md:pb-8
        bg-gradient-to-b from-transparent dark:(to-black)
        to-white opacity-100"
        >
          <div className="flex-col items-start justify-end w-full drop-shadow-lg filter overscroll-auto">
            {movieLogo !== undefined && movieLogo.length > 0 ? (
              <TMDBImage
                type="logo"
                path={movieLogo[0].file_path}
                alt={movie?.title}
                fullSize={true}
                className="drop-shadow-md filter object-contain w-sm max-h-[100%] max-w-[100%]"
              />
            ) : (
              <h1 className="text-4xl font-extrabold font-title">
                {movie?.title}
              </h1>
            )}
            <p className="font-bold mt-4">
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
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              {movie?.vote_average.toFixed(1)} / 10
            </p>
          </div>
        </Container>
        <Container
          relative={true}
          sectionClass="w-screen overflow-hidden !w-screen"
          containerClass="!bg-white dark:(!bg-black) !grid-cols-1 !mt-0 md:pt-16"
          gridClass="!grid-cols-1 !md:grid-cols-3 !lg:grid-cols-4 !xl:grid-cols-5 !gap-4"
        >
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
          {/* {movie?.images?.backdrops
          .sort((a, b) => b.height - a.height + (b.width - a.width))
          .map((img) => (
            <ImageCard
            type="backdrop"
            movie_id={movie.id}
            inCollection={
              !!collection?.find((entry) => entry.file_path == img.file_path)
            }
            {...img}
            key={img.file_path}
            />
          ))} */}
        </Container>
      </div>
    </HandleAsync>
  );
}

export default Page;
