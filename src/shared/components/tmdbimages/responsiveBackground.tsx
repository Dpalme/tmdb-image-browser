import { TMDBImage } from './tmdbImg';

export const ResponsiveBackground = (props: { imagePath: string }) => {
  return (
    <>
      <TMDBImage
        type="backdrop"
        path={props.imagePath}
        className="fixed -z-2 h-screen w-screen
        left-0 object-cover top-0"
      />
    </>
  );
};
