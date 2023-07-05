import { TMDBImage } from '@/shared/components/tmdbimages/tmdbImg';
import { useModal } from '@/shared/hooks/useModal';
import { useCallback } from 'react';
import { AddToCollectionButton } from '@/shared/components/tmdbimages/addToCollectionButton';
import { ModalTMDBImage } from '@/shared/components/tmdbimages/modalImage';

export const ImageCard = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  movie_id: number;
  file_path: string;
  inCollection: boolean;
  aspect_ratio: number;
  height: number;
  width: number;
}) => {
  const setModal = useModal();
  const imageToModal = useCallback(() => {
    setModal(<ModalTMDBImage {...props} />);
  }, [setModal]);

  return (
    <div
      className={[
        'relative self-start',
        props.type == 'backdrop' && 'row-span-1 order-1',
        props.type == 'poster' && 'row-span-2 order-2',
      ].join(' ')}
    >
      <TMDBImage
        type={props.type}
        path={props.file_path}
        key={props.file_path}
        aspectRatio={props.aspect_ratio}
        className="bg-gray-600 w-full"
      />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-0
        md:hover:opacity-100 transition-opacity flex flex-col items-end
        cursor-pointer"
        onClick={() => imageToModal()}
      >
        <div
          className="bg-white dark:bg-black bg-opacity-75 p-2
        font-extralight italic"
        >
          <AddToCollectionButton {...props} />
        </div>
        <div
          className="absolute bottom-0 left-0 dark:bg-black
        bg-opacity-70 bg-white"
        >
          {props.width} x {props.height}
        </div>
      </div>
    </div>
  );
};
