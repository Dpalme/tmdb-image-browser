export default function FallbackPoster(props: {
  type?: 'backdrop' | 'poster';
}) {
  return (
    <div
      className="bg-gray-200 dark:bg-gray-900 animate-pulse w-full"
      style={{
        aspectRatio: !!props.type && props.type == 'backdrop' ? 1.778 : 0.667,
      }}
    />
  );
}
