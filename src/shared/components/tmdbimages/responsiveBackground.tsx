import { TMDBImage } from './tmdbImg';

export const ResponsiveBackground = (props: { imagePath: string }) => {
  return (
    <>
      <TMDBImage
        type="backdrop"
        path={props.imagePath}
        className="fixed -z-2 h-[calc(100vh-3.5rem)] w-screen
        top-14 left-0 object-cover opacity-0 md:opacity-100"
      />
      <div
        className="fixed -z-1 h-[50vh] w-screen bottom-0 left-0 object-cover
       bg-gradient-to-b from-transparent dark:(to-black mix-blend-multiply)
       to-white opacity-50 mix-blend-screen"
      />
    </>
  );
};
