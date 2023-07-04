import { useGetCollection } from './hooks';
import { HandleAsync } from '@/shared/components/handleAsync';
import { Container } from '@/shared/components/container';
import { ImageCard } from '@/movie/imageCard';

export const CollectionPage = () => {
  const { collection, isLoading, error } = useGetCollection();

  return (
    <HandleAsync loading={isLoading} error={error}>
      <Container>
        <div className="grid grid-cols-1 gap-2">
          {collection
            ?.filter((a) => a.type == 'poster')
            .sort(
              (a, b) =>
                new Date(a.added_on).getTime() - new Date(b.added_on).getTime()
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
        <div
          className="grid grid-cols-1 gap-2"
        >
          {collection
            ?.filter((a) => a.type == 'backdrop')
            .sort(
              (a, b) =>
                new Date(a.added_on).getTime() - new Date(b.added_on).getTime()
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
