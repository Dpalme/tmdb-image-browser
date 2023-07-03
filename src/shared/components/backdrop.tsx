import { LoadingSpinner } from './loadingSpinner';

export const LoadingBackdrop = () => {
  return (
    <div
      className="fixed z-10 w-full h-full text-main flex
      flex-col items-center justify-center gap-6"
    >
      <p className="text-6xl pb-2">
        P
        <span className="spin" />
        STERIFY
      </p>
    </div>
  );
};
