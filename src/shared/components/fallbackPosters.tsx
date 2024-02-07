import FallbackPoster from './fallbackPoster';

export const FallbackPosters = (props: {
  numberOfPosters: number;
  type?: 'backdrop' | 'poster';
}) => {
  return (
    <>
      {[...Array(props.numberOfPosters).keys()].map((n) => (
        <FallbackPoster type={props.type} key={n} />
      ))}
    </>
  );
};
