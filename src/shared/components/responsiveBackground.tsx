import { TMDBImage } from './tmdbImg';

export const ResponsiveBackground = (props: { imagePath: string }) => {
  return (
    <>
      <TMDBImage
        type="backdrop"
        path={props.imagePath}
        className="fixed -z-2 h-screen w-screen top-0 left-0 object-cover"
      />
      <div
        className="fixed -z-1 h-screen w-screen top-0 left-0 object-cover
       bg-gradient-to-b md:bg-gradient-to-l from-transparent to-[#0000]"
      />
    </>
  );
};
