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
    <div
      className="h-full max-h-screen grid top-0 gap-2 relative
    grid-rows-[1fr_3rem]"
    >
      <div className="flex items-center justify-center overflow-hidden">
        <TMDBImage
          type={props.type}
          path={props.file_path}
          className="object-contain w-full max-h-[100%] max-w-[100%]"
          fullSize={true}
        />
      </div>
      <div
        className="flex flex-row gap-8 items-center
      p-4 rounded-md shadow-lg justify-self-center
      invert filter dark:(invert-0) bg-black text-white"
      >
        <p>
          {props.width} X {props.height}
        </p>
        <a
          href={getURLForSize('original', props.file_path)}
          download={true}
          target="_blank"
        >
          <img src={DownloadIcon} className="w-full h-full" />
        </a>
        <AddToCollectionButton {...props} />
      </div>
    </div>
  );
};
