export const FallbackPosters = (props: {
  numberOfPosters: number;
  type?: 'backdrop' | 'poster';
}) => {
  return (
    <>
      {[...Array(props.numberOfPosters).keys()].map((n) => (
        <div
          className="bg-gray-200 dark:bg-gray-900 animate-pulse w-full"
          style={{
            aspectRatio:
              !!props.type && props.type == 'backdrop' ? 1.778 : 0.667,
          }}
          key={n}
        />
      ))}
    </>
  );
};
