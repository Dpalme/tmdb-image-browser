import { useGetCollection } from './hooks';
import { HandleAsync } from '@/shared/components/handleAsync';
import { Container } from '@/shared/components/container';
import { ImageCard } from '@/shared/components/tmdbimages/imageCard';
import { NavLink } from 'react-router-dom';

export const CollectionPage = () => {
  const { collection, isLoading, error } = useGetCollection();

  return (
    <HandleAsync loading={isLoading} error={error}>
      <Container>
        <div className="grid grid-cols-1 gap-2">
          {!collection ||
            (collection.length == 0 && (
              <>
                <h1 className="text-2xl mb-4">
                  You haven't collected anything!
                </h1>
                <p>
                  Try going to the{' '}
                  <NavLink to="/" className="font-extrabold text-emerald-600">
                    homepage
                  </NavLink>{' '}
                  and finding a film you like
                </p>
                <p className='mb-2'>
                  Once there, click on any image you like and click the heart
                  icon.
                </p>
                <p>Here's an example image:</p>
                <ImageCard
                  type="poster"
                  movie_id={772515}
                  file_path="/1mZcxuL4GLUvPdEXC4iZPjG2EO3.jpg"
                  aspect_ratio={0.667}
                  height={3000}
                  width={2000}
                  inCollection={false}
                />
              </>
            ))}
          {collection
            ?.filter((a) => a.type == 'poster')
            .sort(
              (a, b) =>
                new Date(b.added_on).getTime() - new Date(a.added_on).getTime()
            )
            .map((entry) => (
              <ImageCard
                type="backdrop"
                file_path={entry.file_path}
                movie_id={entry.movie_id}
                key={entry.file_path}
                inCollection={true}
                aspect_ratio={entry.aspect_ratio}
                width={entry.width}
                height={entry.height}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-2">
          {collection
            ?.filter((a) => a.type == 'backdrop')
            .sort(
              (a, b) =>
                new Date(b.added_on).getTime() - new Date(a.added_on).getTime()
            )
            .map((entry) => (
              <ImageCard
                type="backdrop"
                file_path={entry.file_path}
                movie_id={entry.movie_id}
                key={entry.file_path}
                inCollection={true}
                aspect_ratio={entry.aspect_ratio}
                width={entry.width}
                height={entry.height}
              />
            ))}
        </div>
      </Container>
    </HandleAsync>
  );
};
export default CollectionPage;
