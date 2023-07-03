export const LoadingSpinner = (props: { className?: string }) => {
  return (
    <div
      className={[
        'w-48 h-[1px] bg-neutral-300 rounded-lg',
        'animate-squeeze delay-100 inline-block origin-center',
        props.className,
      ].join(' ')}
    />
  );
};
