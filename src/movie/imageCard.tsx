import {
  useAddToCollection,
  useImageIsInCollection,
  useRemoveFromCollection,
} from '@/collection/hooks';
import { LoadingSpinner } from '@/shared/components/loadingSpinner';
import { TMDBImage, getURLForSize } from '@/shared/components/tmdbImg';
import { useModal } from '@/shared/hooks/useModal';
import { useCallback, useState } from 'react';

export const ImageCard = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  movie_id: number;
  file_path: string;
  inCollection: boolean;
  aspect_ratio: number;
  height: number;
  width: number;
}) => {
  const [inCollection, setInCollection] = useState(props.inCollection);
  const { mutate: addToCollection, isLoading: addLoading } =
    useAddToCollection();
  const { mutate: removeFromCollection, isLoading: remLoading } =
    useRemoveFromCollection();

  const setModal = useModal();
  const imageToModal = useCallback(() => {
    setModal(
      <>
        <TMDBImage
          type={props.type}
          path={props.file_path}
          aspectRatio={props.aspect_ratio}
          className="w-full h-full object-contain"
        />
        <div className="p-4 bg-black w-full text-center">
          <a
            href={getURLForSize('original', props.file_path)}
            download={true}
            target='_blank'
          >Download</a>
        </div>
      </>
    );
  }, [setModal]);

  return (
    <div className="relative self-start">
      <TMDBImage
        type={props.type}
        path={props.file_path}
        key={props.file_path}
        aspectRatio={props.aspect_ratio}
        className="bg-gray-600"
      />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100
        transition-opacity flex flex-col items-end"
        onClick={() => imageToModal()}
      >
        <div className="bg-black bg-opacity-75 p-2 font-extralight italic">
          {addLoading || remLoading ? (
            <LoadingSpinner />
          ) : inCollection === true ? (
            <div
              onClick={() =>
                removeFromCollection(props.file_path, {
                  onSuccess: () => setInCollection(false),
                })
              }
              className="cursor-pointer navlink text-red-600"
            >
              - <span className="text-xs">Remove from collection</span>
            </div>
          ) : (
            <div
              onClick={() =>
                addToCollection(
                  {
                    file_path: props.file_path,
                    movie_id: props.movie_id,
                    aspect_ratio: props.aspect_ratio,
                    height: props.height,
                    width: props.width,
                    type: props.type,
                  },
                  {
                    onSuccess: () => setInCollection(true),
                  }
                )
              }
              className="cursor-pointer navlink text-emerald-600"
            >
              + <span className="text-xs">Add to collection</span>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70">
          {props.width} x {props.height}
        </div>
      </div>
    </div>
  );
};
