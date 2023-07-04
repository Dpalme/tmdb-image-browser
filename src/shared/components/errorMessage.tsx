export const ErrorMessage = (props: {
  message: string;
  className?: string;
}) => {
  return (
    <div
      className={[
        'p-4 border border-solid rounded-md bg-red-500',
        'w-full shadow-lg fixed top-1/2 left-1/2',
        'border-error-60 bg-error-50 text-white -translate-x-1/2',
        '-translate-y-1/2 z-10 transform max-w-xl',
        props.className,
      ].join(' ')}
    >
      {props.message}
    </div>
  );
};
