import { useState } from 'react';
import {
  useAddToCollection,
  useRemoveFromCollection,
} from '@/collection/hooks';
import AddIcon from '@assets/heart_outline.svg';
import AddedIcon from '@assets/heart_filled.svg';

export const AddToCollectionButton = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  movie_id: number;
  file_path: string;
  inCollection: boolean;
  aspect_ratio: number;
  height: number;
  width: number;
}) => {
  const [inCollection, setInCollection] = useState(props.inCollection);
  const { mutate: addToCollection, isPending: addLoading } =
    useAddToCollection();
  const { mutate: removeFromCollection, isPending: remLoading } =
    useRemoveFromCollection();

  return (
    <div className="w-8 h-8">
      <div
        onClick={(ev) => {
          (inCollection ? removeFromCollection : addToCollection)(
            {
              file_path: props.file_path,
              movie_id: props.movie_id,
              aspect_ratio: props.aspect_ratio,
              height: props.height,
              width: props.width,
              type: props.type,
            },
            {
              onSuccess: () => setInCollection((prevValue) => !prevValue),
            }
          );
          ev.stopPropagation();
        }}
        className={[
          'cursor-pointer h-full',
          addLoading || (remLoading && 'animate-pulse'),
        ].join(' ')}
        key={`${props.file_path}.button.${inCollection}`}
      >
        <img
          className="w-full h-full"
          src={inCollection ? AddedIcon : AddIcon}
        />
      </div>
    </div>
  );
};
