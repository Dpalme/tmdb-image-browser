import { useGetCollection } from './hooks';
import { HandleAsync } from '@/shared/components/handleAsync';
import { Container } from '@/shared/components/container';
import { ImageCard } from '@/movie/imageCard';

export const CollectionPage = () => {
  const { collection, isLoading, error } = useGetCollection();

  return (
    <HandleAsync loading={isLoading} error={error}>
      <Container>
        <div className="mt-8 sticky top-8">
          <h1 className="text-4xl font-extrabold font-title">Collection</h1>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4 gap-2"
        >
          {collection?.map((entry) => (
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
