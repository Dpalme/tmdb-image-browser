import { AddToCollectionButton } from './addToCollectionButton';
import { TMDBImage, getURLForSize } from './tmdbImg';
import DownloadIcon from '@assets/download.svg';

export const ModalTMDBImage = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  movie_id: number;
  file_path: string;
  inCollection: boolean;
  aspect_ratio: number;
  height: number;
  width: number;
}) => {
  return (
    <div className="h-full w-full grid grid-rows-[1fr_4rem] md:grid-cols-[2rem_1fr] gap-2">
      <div className="flex flex-row gap-2 w-8 items-center order-last md:(order-first flex-col w-auto h-12)">
        <a
          href={getURLForSize('original', props.file_path)}
          download={true}
          target="_blank"
        >
          <img src={DownloadIcon} className="w-full h-full" />
        </a>
        <AddToCollectionButton {...props} />
      </div>
      <TMDBImage
        type={props.type}
        path={props.file_path}
        aspectRatio={props.aspect_ratio}
        className="flex-grow h-full w-full object-contain"
      />
    </div>
  );
};
